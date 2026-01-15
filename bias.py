#!/usr/bin/env python3
"""
bias.py

Causal weekly bias computed ONLY from previous data (default and only mode).
Usage: python bias.py --in data.csv --out bias.csv

 - All indicators are computed on P = Close.shift(1) (i.e. price as-of end-of-previous-bar).
 - No "use-prev" toggles — causal behaviour is the only mode.
 - Minimal signals: EMA crossover (fast/slow) + rolling z-score of prior returns.
 - Bias_score is a small composite of these causal signals; Bias_label is derived by threshold.
"""
from __future__ import annotations
import argparse
import pandas as pd
import numpy as np
import os
import sys
from typing import Optional

# ---------- helpers ----------
def detect_delimiter(path: str) -> str:
    with open(path, 'r', errors='ignore') as f:
        first = f.readline()
    if '\t' in first:
        return '\t'
    if ';' in first and first.count(';') > first.count(','):
        return ';'
    return ','

def clean_header(cols):
    return [str(c).strip().replace('<','').replace('>','').strip() for c in cols]

def find_column(df: pd.DataFrame, choices):
    cols = list(df.columns)
    for ch in choices:
        for c in cols:
            if c.strip().lower() == ch.lower():
                return c
    for ch in choices:
        for c in cols:
            if ch.lower() in c.strip().lower():
                return c
    return None

def parse_datetime_series(s: pd.Series) -> pd.Series:
    s = s.astype(str).str.strip()
    parsed = pd.to_datetime(s.str.replace('.', '-', regex=False), errors='coerce')
    if parsed.notna().sum() > 0.9 * len(parsed):
        return parsed
    parsed = pd.to_datetime(s, errors='coerce', dayfirst=False)
    if parsed.notna().sum() > 0.9 * len(parsed):
        return parsed
    return pd.to_datetime(s, errors='coerce', dayfirst=True)

def robust_zscore(series: pd.Series, window: int = 52, min_periods: int = 8) -> pd.Series:
    roll_mean = series.rolling(window=window, min_periods=min_periods).mean()
    roll_std = series.rolling(window=window, min_periods=min_periods).std(ddof=0).replace({0: np.nan})
    return (series - roll_mean) / roll_std

# ---------- core computation (strictly causal) ----------
def compute_causal_bias(
    in_path: str,
    out_path: str,
    fast_span: int = 8,
    slow_span: int = 21,
    z_window: int = 52,
    z_min_periods: int = 8,
    threshold: float = 0.20,
):
    if not os.path.exists(in_path):
        raise FileNotFoundError(f"Input file not found: {in_path}")

    sep = detect_delimiter(in_path)
    df_raw = pd.read_csv(in_path, sep=sep, engine='python', header=0)
    df_raw.columns = clean_header(df_raw.columns)

    # find important cols
    date_col = find_column(df_raw, ['DATE','DATETIME','TIME','TIMESTAMP'])
    close_col = find_column(df_raw, ['CLOSE','C','PRICE'])
    open_col  = find_column(df_raw, ['OPEN','O'])
    high_col  = find_column(df_raw, ['HIGH','H'])
    low_col   = find_column(df_raw, ['LOW','L'])
    vol_col   = find_column(df_raw, ['VOLUME','VOL','TICKVOL','TICK_VOLUME'])

    if date_col is None:
        date_col = df_raw.columns[0]

    rename_map = {date_col: 'Datetime'}
    if close_col: rename_map[close_col] = 'Close'
    if open_col:  rename_map[open_col]  = 'Open'
    if high_col:  rename_map[high_col]  = 'High'
    if low_col:   rename_map[low_col]   = 'Low'
    if vol_col:   rename_map[vol_col]   = 'Volume'

    df = df_raw.rename(columns=rename_map).copy()

    # parse and index
    df['Datetime'] = parse_datetime_series(df['Datetime'])
    df = df[~df['Datetime'].isna()].copy()
    df = df.set_index('Datetime').sort_index()

    # numeric conversions
    for c in ['Open','High','Low','Close','Volume']:
        if c in df.columns:
            df[c] = pd.to_numeric(df[c], errors='coerce')

    if 'Close' not in df.columns or df['Close'].isna().all():
        raise ValueError("Input must contain a valid 'Close' column with numeric values.")

    # ----- STRICT CAUSAL: everything computed on P = Close.shift(1) -----
    # P[t] represents the last known close at time t (which is Close at original index t-1).
    P = df['Close'].shift(1).rename('P')

    # short safety: drop rows where P is NaN (first row or earlier missing data)
    df = df.assign(P=P)
    # we keep the row but P will be NaN until data exists; signals will be NaN until warmed

    # EMA on P (causal)
    ema_fast = P.ewm(span=fast_span, adjust=False).mean().rename('EMA_fast')
    ema_slow = P.ewm(span=slow_span, adjust=False).mean().rename('EMA_slow')
    ema_diff = (ema_fast - ema_slow).rename('ema_diff')

    # returns on P (previous returns only)
    ret = P.pct_change().rename('ret')

    # rolling zscore of returns (causal because computed on ret which is from P)
    ret_z = robust_zscore(ret, window=z_window, min_periods=z_min_periods).rename('ret_z')

    # scaled signals in [-1,1]
    s_ema = np.tanh(ema_diff / (P.rolling(window=20, min_periods=1).std().replace({0: np.nan}) + 1e-12)).rename('s_ema')
    s_ret = np.tanh(ret_z.clip(-4,4) / 4).rename('s_ret')  # normalize z into approx [-1,1]

    # composite bias score (simple average of available scaled signals)
    score_df = pd.concat([s_ema, s_ret], axis=1)
    bias_raw = score_df.mean(axis=1, skipna=True).rename('Bias_raw')

    # confidence: magnitude * agreement fraction
    def agreement_fraction(row):
        vals = [row.get('s_ema'), row.get('s_ret')]
        # sign of each (0 if nan or zero)
        signs = []
        for v in vals:
            if pd.isna(v) or v == 0:
                signs.append(0)
            else:
                signs.append(int(np.sign(v)))
        bias_sign = int(np.sign(row.get('Bias_raw', 0)))
        if bias_sign == 0:
            return 0.0
        matches = sum(1 for s in signs if s == bias_sign)
        nonzero = sum(1 for s in signs if s != 0)
        return (matches / nonzero) if nonzero > 0 else 0.0

    bias = bias_raw  # already causal by construction

    agreement = score_df.apply(agreement_fraction, axis=1)
    confidence = (bias.abs() * agreement).rename('confidence')

    # Labels
    label = pd.Series(index=bias.index, dtype='object', name='Bias_label')
    label.loc[bias > threshold] = 'Bullish'
    label.loc[bias < -threshold] = 'Bearish'
    label.loc[(bias.abs() <= threshold) | bias.isna()] = 'Neutral'

    # Compose output
    out = pd.DataFrame({
        'Open': df['Open'] if 'Open' in df.columns else np.nan,
        'High': df['High'] if 'High' in df.columns else np.nan,
        'Low' : df['Low']  if 'Low'  in df.columns else np.nan,
        'Close': df['Close'],
        'Volume': df['Volume'] if 'Volume' in df.columns else np.nan,
        # causal price used
        'P_prev_close': df['P'],
        # indicators (causal)
        'EMA_fast': ema_fast,
        'EMA_slow': ema_slow,
        'ema_diff': ema_diff,
        's_ema': s_ema,
        'ret': ret,
        'ret_z': ret_z,
        's_ret': s_ret,
        'Bias_raw': bias_raw,
        'Bias_score': bias,
        'Bias_label': label,
        'agreement': agreement,
        'confidence': confidence
    })

    # Save CSV
    out.to_csv(out_path, index=True)
    print(f"Saved causal bias CSV to: {out_path}")
    valid = out['Bias_score'].notna().sum()
    print(f"Total rows: {len(out)}  Rows with Bias_score (non-NaN): {valid}")

    return out

# ---------- CLI ----------
def main():
    p = argparse.ArgumentParser(description="Compute strictly-causal bias (previous-data only).")
    p.add_argument('--in', dest='in_path', required=True, help='Input CSV path (OHLC CSV)')
    p.add_argument('--out', dest='out_path', required=True, help='Output CSV path')
    p.add_argument('--fast', dest='fast_span', type=int, default=8, help='Fast EMA span (default 8)')
    p.add_argument('--slow', dest='slow_span', type=int, default=21, help='Slow EMA span (default 21)')
    p.add_argument('--zwin', dest='z_window', type=int, default=52, help='Window for returns zscore (default 52)')
    p.add_argument('--zmin', dest='z_min_periods', type=int, default=8, help='min_periods for zscore (default 8)')
    p.add_argument('--threshold', dest='threshold', type=float, default=0.20, help='Threshold for labels (default 0.20)')
    args = p.parse_args()

    try:
        out = compute_causal_bias(
            args.in_path,
            args.out_path,
            fast_span=args.fast_span,
            slow_span=args.slow_span,
            z_window=args.z_window,
            z_min_periods=args.z_min_periods,
            threshold=args.threshold
        )
        # print concise preview
        print("\nPreview (last 8 rows):")
        with pd.option_context('display.max_columns', None, 'display.width', 200):
            print(out[['P_prev_close','s_ema','s_ret','Bias_score','Bias_label','confidence']].tail(8).to_string())
    except Exception as e:
        print("Error:", e, file=sys.stderr)
        sys.exit(2)

if __name__ == "__main__":
    main()
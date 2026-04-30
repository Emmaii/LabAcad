(function() {
  var whatsappNumber = "2347031763615";
  var baseMessage = "Hi, I'm interested in the Laboratory Room. How can I get access?";

  function buildWhatsAppUrl() {
    return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(baseMessage);
  }

  function openWhatsApp() {
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  }

  var lectureData = [
    {
      title: "Finding Bias",
      desc: "Master the art of determining market direction and bias identification.",
      videoId: "RraPVl3lPg0",
      assignmentText:
`ASSIGNMENT: Finding Bias
━━━━━━━━━━━━━━━━━━━━

1. Technical Setup: Set up your chart on the 2-hour time frame and install the Smart Money Concept indicator by LuxAlgo.

2. Indicator Optimization: Clean up the chart by removing unnecessary elements, including internal structures, internal blocks, and equal highs/lows, to reduce noise.

3. Conceptual Research: Research and explain the core difference between a Break of Structure (BOS) and a Change of Character (CHOCH).

4. Practical Application: Analyze the current market bias for the SPX 500 index using the method taught in the video.

━━━━━━━━━━━━━━━━━━━━
© Lab Acad Gold Mastery`
    },
    {
      title: "The 3-Hour Trading Window That Eliminates Bad Trades",
      desc: "Learn the specific time window that filters out noise and improves probability.",
      videoId: "bI4NIjkAC34",
      assignmentText:
`ASSIGNMENT: The 3-Hour Trading Window
━━━━━━━━━━━━━━━━━━━━

1. Identify and map out the Tokyo session: Use the Sessions indicator mentioned in the video to clear your chart of unnecessary information and isolate the Tokyo session.

2. Apply it to a different asset: Perform this analysis specifically on the SPX 500 index.

━━━━━━━━━━━━━━━━━━━━
© Lab Acad Gold Mastery`
    },
    {
      title: "POI — Where to Buy",
      desc: "Identifying Points of Interest and optimal entry zones.",
      videoId: "7rDJikdlBwY",
      assignmentText:
`ASSIGNMENT: POI — Where to Buy
━━━━━━━━━━━━━━━━━━━━

1. Identify Market Bias: Start by analyzing the 1-hour timeframe to determine your overall trend bias.

2. Determine Entry Zone: Move to the 5-minute timeframe to identify the specific area where you should look to buy or sell.

3. Analyze Tokyo Session: Within the 5-minute chart, look at the Tokyo session range.
   • If the market has "cleared" the Tokyo range in the direction of your trend, confirm the bias.
   • If it moves against, do not trade.

4. Locate the Order Block: Find the 5-minute swing order block within that session to place your trade.

5. Apply to Indices: Perform this analysis on SPX and NAS.

━━━━━━━━━━━━━━━━━━━━
© Lab Acad Gold Mastery`
    },
    {
      title: "From Setup to Profit — Real Trade Breakdown",
      desc: "Step-by-step analysis of a real trade from entry to exit.",
      videoId: "-wHaZyAtZ6M",
      assignmentText:
`ASSIGNMENT: From Setup to Profit
━━━━━━━━━━━━━━━━━━━━

1. Trend Identification: Analyze the market on the 1-hour timeframe to confirm structural bias.

2. Session Analysis: Identify the Tokyo session and observe price action.

3. Precision Entry Execution: Switch to the 5-minute timeframe to identify the swing block and set your order.

4. Risk Management: Apply stop-loss buffer (+5 pips) and target at least 2.5R.

DELIVERABLES:
• Chart Screenshot with entry, SL, TP.
• Trade Journal explaining your reasoning.
• Reflection: Why the 5-minute timeframe over higher noise timeframes.

━━━━━━━━━━━━━━━━━━━━
© Lab Acad Gold Mastery`
    },
    {
      title: "Everything Combined — This is how to Trade Daily",
      desc: "Bringing all concepts together into one comprehensive trading approach.",
      videoId: "q0Pbg85AHQU",
      assignmentText:
`ASSIGNMENT: Everything Combined
━━━━━━━━━━━━━━━━━━━━

1. Determine Trend Bias on 1H.

2. Analyze the Tokyo Session on 5M.

3. Identify the Trade: Look for a breakout in the direction of your bias and locate the swing block.

4. Manage Risk: +5 pips stop-loss buffer, aim for 2.5R.

━━━━━━━━━━━━━━━━━━━━
© Lab Acad Gold Mastery`
    },
    {
      title: "Live Trading the Reversal Method",
      desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
      videoId: "CICleAnoMXE",
      assignmentText:
`ASSIGNMENT: Live Trading the Reversal Method
━━━━━━━━━━━━━━━━━━━━

1. Define the "Reversal Method" and how to identify a trend reversal.

2. Locate a swing block on a higher timeframe (e.g., 2H) as a valid reversal entry point.

3. Explain stop-loss calculation and why a conservative 1R target might be chosen.

4. Practice the 1-minute confirmation entry and the significance of a break of structure.

━━━━━━━━━━━━━━━━━━━━
© Lab Acad Gold Mastery`
    }
  ];

  function downloadAssignment(title, text) {
    var blob = new Blob(["Lab Acad Gold Mastery\n" + title + "\n\n" + text], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = title.replace(/[^a-zA-Z0-9]/g, "_") + "_Assignment.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
      if (m === "&") return "&amp;";
      if (m === "<") return "&lt;";
      if (m === ">") return "&gt;";
      return m;
    });
  }

  function renderLectures() {
    var container = document.getElementById("lectureList");
    if (!container) return;

    container.innerHTML = "";

    lectureData.forEach(function(item, idx) {
      var row = document.createElement("div");
      row.className = "lecture-item";
      row.innerHTML = `
        <div class="lecture-main">
          <div class="lecture-index">${idx + 1}</div>
          <div>
            <div class="lecture-title">${escapeHtml(item.title)}</div>
            <div class="lecture-meta">${escapeHtml(item.desc)}</div>
          </div>
        </div>
        <div class="lecture-actions">
          <button class="btn-assignment" data-assignment>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            Assignment
          </button>
          <span class="badge-status preview">Free</span>
          <button class="btn-watch" data-watch>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Watch
          </button>
        </div>
      `;

      var assignBtn = row.querySelector("[data-assignment]");
      assignBtn.onclick = (function(t, a) {
        return function() { downloadAssignment(t, a); };
      })(item.title, item.assignmentText);

      var watchBtn = row.querySelector("[data-watch]");
      watchBtn.onclick = (function(vid) {
        return function() {
          window.open("https://www.youtube.com/watch?v=" + vid, "_blank", "noopener,noreferrer");
        };
      })(item.videoId);

      container.appendChild(row);
    });
  }

  function startCountdown() {
    var end = new Date("May 15, 2026 23:59:59").getTime();

    var timer = setInterval(function() {
      var now = new Date().getTime();
      var dist = end - now;

      if (dist < 0) {
        clearInterval(timer);
        var countdown = document.getElementById("countdown");
        if (countdown) {
          countdown.innerHTML = '<div class="expired">Offer Expired</div>';
        }
        return;
      }

      var daysEl = document.getElementById("days");
      var hoursEl = document.getElementById("hours");
      var minutesEl = document.getElementById("minutes");
      var secondsEl = document.getElementById("seconds");

      if (daysEl) daysEl.textContent = Math.floor(dist / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
      if (hoursEl) hoursEl.textContent = Math.floor((dist % (86400000)) / 3600000).toString().padStart(2, "0");
      if (minutesEl) minutesEl.textContent = Math.floor((dist % 3600000) / 60000).toString().padStart(2, "0");
      if (secondsEl) secondsEl.textContent = Math.floor((dist % 60000) / 1000).toString().padStart(2, "0");
    }, 1000);
  }

  function typeText() {
    var el = document.getElementById("heroTitle");
    if (!el) return;

    var text = "Learn how to trade Gold profitably and consistently.";
    el.textContent = "";
    el.style.borderRight = "3px solid #d4af37";
    el.style.display = "inline-block";
    el.style.paddingRight = "4px";

    var i = 0;
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 35);
      } else {
        setInterval(function() {
          el.style.borderRightColor = el.style.borderRightColor === "transparent" ? "#d4af37" : "transparent";
        }, 500);
      }
    }

    type();
  }

  function init() {
    var whatsappButtons = document.querySelectorAll("#whatsappTop, #whatsappExecution");
    for (var i = 0; i < whatsappButtons.length; i++) {
      whatsappButtons[i].addEventListener("click", function(e) {
        e.preventDefault();
        openWhatsApp();
      });
    }

    var yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    renderLectures();
    startCountdown();
    typeText();

    if (typeof TradingView !== "undefined") {
      new TradingView.widget({
        container_id: "tradingview_xauusd",
        width: "100%",
        height: 400,
        symbol: "OANDA:XAUUSD",
        interval: "240",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#0b0d10",
        enable_publishing: false,
        hide_side_toolbar: true,
        allow_symbol_change: false,
        studies: [],
        show_popup_button: false,
        popup_width: "1000",
        popup_height: "650"
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
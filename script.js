(function() {
  var whatsappNumber = "2347031763615";
  var baseMessage = "Hi, I want access to the Gold Mastery course. How do I get started?";

  function buildWhatsAppUrl(referralCode) {
    referralCode = referralCode || "";
    var message = baseMessage;

    if (referralCode.trim() !== "") {
      message += "%0A%0AReferral Code: " + encodeURIComponent(referralCode.trim());
    }

    return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  }

  var lectureData = [
    {
      title: "Finding Bias",
      desc: "Master the art of determining market direction and bias identification.",
      status: "preview",
      videoId: "RraPVl3lPg0",
      assignmentText: "ASSIGNMENT: Finding Bias\n━━━━━━━━━━━━━━━━━━━━\n\n1. Technical Setup: Set up your chart on the 2-hour time frame and install the Smart Money Concept indicator by LuxAlgo.\n\n2. Indicator Optimization: Clean up the chart by removing unnecessary elements, including internal structures, internal blocks, and equal highs/lows, to reduce noise.\n\n3. Conceptual Research: Research and explain the core difference between a Break of Structure (BOS) and a Change of Character (CHOCH).\n\n4. Practical Application: Analyze the current market bias for the SPX 500 index using the method taught in the video.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "The 3-Hour Trading Window That Eliminates Bad Trades",
      desc: "Learn the specific time window that filters out noise and improves probability.",
      status: "locked",
      videoId: "",
      assignmentText: "ASSIGNMENT: The 3-Hour Trading Window\n━━━━━━━━━━━━━━━━━━━━\n\n1. Identify and map out the Tokyo session: Use the Sessions indicator mentioned in the video (10:04-10:13) to clear your chart of unnecessary information and isolate the Tokyo session (10:48-11:05).\n\n2. Apply it to a different asset: Perform this analysis specifically on the SPX 500 index (14:05-14:12).\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "POI — Where to Buy",
      desc: "Identifying Points of Interest and optimal entry zones.",
      status: "locked",
      videoId: "",
      assignmentText: "ASSIGNMENT: POI — Where to Buy\n━━━━━━━━━━━━━━━━━━━━\n\n1. Identify Market Bias: Start by analyzing the 1-hour timeframe to determine your overall trend bias (whether the market is in an uptrend or a downtrend) (20:33, 20:39).\n\n2. Determine Entry Zone: Move to the 5-minute timeframe to identify the specific area where you should look to buy or sell (20:36, 20:42).\n\n3. Analyze Tokyo Session: Within the 5-minute chart, look at the Tokyo session range (20:45).\n   • If the market has \"cleared\" or pushed beyond the Tokyo range in the direction of your 1-hour trend, this confirms the market is following your bias (20:48-21:07).\n   • If the market moves against your trend, you do not take a trade for the day (19:36).\n\n4. Locate the Order Block: Find the 5-minute swing order block within that session to place your trade (21:19-21:28).\n\n5. Apply to Indices: Perform this full analysis on SPX (S&P 500) and NAS (Nasdaq) to determine if it is a buy or sell, and exactly where your entry point should be.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "From Setup to Profit — Real Trade Breakdown",
      desc: "Step-by-step analysis of a real trade from entry to exit.",
      status: "locked",
      videoId: "",
      assignmentText: "ASSIGNMENT: From Setup to Profit\n━━━━━━━━━━━━━━━━━━━━\n\n1. Trend Identification (0:47-1:41): Analyze the market on the 1-hour timeframe using the Smart Money indicator to confirm the structural bias (green for uptrend).\n\n2. Session Analysis (2:01-2:36): Identify the Tokyo session and observe price action relative to the session high or low.\n\n3. Precision Entry Execution (2:38-4:27): Switch to the 5-minute timeframe to identify the swing block (order block) and set a buy or sell order based on the identified trend.\n\n4. Risk Management Implementation (4:47-5:14): Apply the taught stop-loss buffer (at least +5 pips) and calculate the risk-to-reward ratio (targeting at least 2.5).\n\nDELIVERABLES:\n• Chart Screenshot: Submit a marked-up chart showing the entry point, stop loss, and take profit levels.\n• Trade Journal: Write a short paragraph explaining the reasoning behind the trade based on the indicators shown in the video (e.g., \"Market cleared the Tokyo high, indicating an uptrend continuation\").\n• Reflection: Explain why you chose the 5-minute timeframe over the 30-minute timeframe for your specific entry, noting the potential for \"noise\" mentioned at (5:42-6:08).\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "Everything Combined — This is how to Trade Daily",
      desc: "Bringing all concepts together into one comprehensive trading approach.",
      status: "locked",
      videoId: "",
      assignmentText: "ASSIGNMENT: Everything Combined\n━━━━━━━━━━━━━━━━━━━━\n\n1. Determine Trend Bias: Start on the 1-hour chart to identify whether the current trend is bullish (uptrend) or bearish (downtrend) (2:16-2:43).\n\n2. Analyze the Tokyo Session: Switch to the 5-minute chart and mark the high and low of the Tokyo session (3:32-3:59).\n\n3. Identify the Trade: Look for the market to break out of the Tokyo session range in the direction of your 1-hour trend bias. Once that happens, locate the swing block that was created to set your entry (6:18-6:45).\n\n4. Manage Risk: Place your trade with a stop-loss that includes an extra 5 pips of room to avoid being stopped out prematurely (6:52-7:18). Aim for an Risk-to-Reward (RR) ratio of approximately 2.5R (5:27-6:01).\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "Live Trading the Reversal Method",
      desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
      status: "locked",
      videoId: "",
      assignmentText: "ASSIGNMENT: Live Trading the Reversal Method\n━━━━━━━━━━━━━━━━━━━━\n\n1. Define the \"Reversal Method\", specifically focusing on how to identify a trend and respond when the market clears the opposite side of a session.\n\n2. Locate a \"swing block\" on a higher timeframe chart, such as the 2-hour chart mentioned in the video, and explain why this serves as a valid reversal entry point.\n\n3. Explain how SL are calculated. Justify why a conservative 1R target might be chosen over a more aggressive one in a reversal situation (1:45-1:52).\n\n4. Practice the 1-minute timeframe \"confirmation entry\" (2:54-3:05). Explain the significance of waiting for a \"break of structure\" before entering a trade (3:08-3:23).\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    }
  ];

  function promptReferral() {
    var referralCode = prompt(
      "💰 REFERRAL PROGRAM 💰\n\nGot a friend who referred you?\nEnter their WhatsApp number below and they earn ₦5,000!\n\n(Leave empty if you don't have a referral code)",
      ""
    );
    return referralCode || "";
  }

  function openWhatsAppWithReferral() {
    var referralCode = promptReferral();
    var url = buildWhatsAppUrl(referralCode);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function downloadAssignment(lectureTitle, assignmentText) {
    var content = "Lab Acad Gold Mastery\n" + lectureTitle + "\n\n" + assignmentText;
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = lectureTitle.replace(/[^a-zA-Z0-9]/g, "_") + "_Assignment.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function renderLectures() {
    var lectureList = document.getElementById("lectureList");
    if (!lectureList) return;

    lectureList.innerHTML = "";

    for (var i = 0; i < lectureData.length; i++) {
      var item = lectureData[i];
      var index = i;

      var row = document.createElement("div");
      row.className = "lecture-item" + (item.status === "locked" ? " locked-item" : "");

      var main = document.createElement("div");
      main.className = "lecture-main";

      var indexBox = document.createElement("div");
      indexBox.className = "lecture-index";
      indexBox.textContent = index + 1;

      var textWrap = document.createElement("div");

      var title = document.createElement("div");
      title.className = "lecture-title";
      title.textContent = item.title;

      var desc = document.createElement("div");
      desc.className = "lecture-meta";
      desc.textContent = item.desc;

      textWrap.appendChild(title);
      textWrap.appendChild(desc);
      main.appendChild(indexBox);
      main.appendChild(textWrap);

      var actions = document.createElement("div");
      actions.className = "lecture-actions";

      var assignmentBtn = document.createElement("button");
      assignmentBtn.className = "btn-assignment";
      assignmentBtn.type = "button";
      assignmentBtn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Assignment';
      assignmentBtn.onclick = (function(t, a) {
        return function() {
          downloadAssignment(t, a);
        };
      })(item.title, item.assignmentText);
      actions.appendChild(assignmentBtn);

      var badge = document.createElement("span");
      badge.className = "badge-status " + item.status;
      badge.textContent = item.status === "preview" ? "Free" : "Locked";
      actions.appendChild(badge);

      if (item.status === "preview") {
        var playBtn = document.createElement("button");
        playBtn.className = "btn-preview";
        playBtn.type = "button";
        playBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Watch';
        playBtn.onclick = (function(vid) {
          return function() {
            var pv = document.getElementById("previewVideo");
            if (pv) pv.src = "https://www.youtube.com/embed/" + vid + "?rel=0&modestbranding=1";
            var ps = document.getElementById("previewSection");
            if (ps) ps.scrollIntoView({ behavior: "smooth", block: "start" });
          };
        })(item.videoId);
        actions.appendChild(playBtn);
      } else {
        var lockBtn = document.createElement("button");
        lockBtn.className = "btn-locked";
        lockBtn.type = "button";
        lockBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Unlock';
        lockBtn.onclick = function() {
          openWhatsAppWithReferral();
        };
        actions.appendChild(lockBtn);
      }

      row.appendChild(main);
      row.appendChild(actions);
      lectureList.appendChild(row);
    }
  }

  function typeText() {
    var text = "Learn how to trade Gold profitably and consistently.";
    var el = document.getElementById("heroTitle");
    if (!el) return;

    el.textContent = "";
    el.style.borderRight = "3px solid #d4af37";
    el.style.display = "inline-block";
    el.style.paddingRight = "4px";

    var i = 0;

    function typing() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 35);
      } else {
        // Blink cursor after typing
        setInterval(function() {
          el.style.borderRightColor = el.style.borderRightColor === "transparent" ? "#d4af37" : "transparent";
        }, 500);
      }
    }

    typing();
  }

  function init() {
    var wt = document.getElementById("whatsappTop");
    var wh = document.getElementById("whatsappHero");
    var wb = document.getElementById("whatsappBottom");
    var yr = document.getElementById("year");

    if (yr) yr.textContent = new Date().getFullYear();

    var links = [wt, wh, wb];
    for (var i = 0; i < links.length; i++) {
      if (links[i]) {
        links[i].addEventListener("click", function(e) {
          e.preventDefault();
          openWhatsAppWithReferral();
        });
      }
    }

    renderLectures();
    typeText();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
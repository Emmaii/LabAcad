(function() {
  var whatsappNumber = "2347031763615";
  var baseMessage = "Hi, I want free access to the Gold Mastery course. Is it still available?";

  function buildWhatsAppUrl(referralCode) {
    referralCode = referralCode || "";
    var message = baseMessage;
    if (referralCode.trim() !== "") {
      message += "%0A%0AReferral Code: " + encodeURIComponent(referralCode.trim());
    }
    return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
  }

  // All lectures now unlocked (status: "preview") with assigned video IDs
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
      status: "preview",
      videoId: "bI4NIjkAC34",   // Using original reverse order video
      assignmentText: "ASSIGNMENT: The 3-Hour Trading Window\n━━━━━━━━━━━━━━━━━━━━\n\n1. Identify and map out the Tokyo session: Use the Sessions indicator mentioned in the video to clear your chart of unnecessary information and isolate the Tokyo session.\n\n2. Apply it to a different asset: Perform this analysis specifically on the SPX 500 index.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "POI — Where to Buy",
      desc: "Identifying Points of Interest and optimal entry zones.",
      status: "preview",
      videoId: "7rDJikdlBwY",
      assignmentText: "ASSIGNMENT: POI — Where to Buy\n━━━━━━━━━━━━━━━━━━━━\n\n1. Identify Market Bias: Start by analyzing the 1-hour timeframe to determine your overall trend bias.\n\n2. Determine Entry Zone: Move to the 5-minute timeframe to identify the specific area where you should look to buy or sell.\n\n3. Analyze Tokyo Session: Within the 5-minute chart, look at the Tokyo session range.\n   • If the market has \"cleared\" the Tokyo range in the direction of your trend, confirm the bias.\n   • If it moves against, do not trade.\n\n4. Locate the Order Block: Find the 5-minute swing order block within that session to place your trade.\n\n5. Apply to Indices: Perform this analysis on SPX and NAS.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "From Setup to Profit — Real Trade Breakdown",
      desc: "Step-by-step analysis of a real trade from entry to exit.",
      status: "preview",
      videoId: "-wHaZyAtZ6M",
      assignmentText: "ASSIGNMENT: From Setup to Profit\n━━━━━━━━━━━━━━━━━━━━\n\n1. Trend Identification: Analyze the market on the 1-hour timeframe to confirm structural bias.\n\n2. Session Analysis: Identify the Tokyo session and observe price action.\n\n3. Precision Entry Execution: Switch to the 5-minute timeframe to identify the swing block and set your order.\n\n4. Risk Management: Apply stop-loss buffer (+5 pips) and target at least 2.5R.\n\nDELIVERABLES:\n• Chart Screenshot with entry, SL, TP.\n• Trade Journal explaining your reasoning.\n• Reflection: Why the 5-minute timeframe over higher noise timeframes.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "Everything Combined — This is how to Trade Daily",
      desc: "Bringing all concepts together into one comprehensive trading approach.",
      status: "preview",
      videoId: "q0Pbg85AHQU",
      assignmentText: "ASSIGNMENT: Everything Combined\n━━━━━━━━━━━━━━━━━━━━\n\n1. Determine Trend Bias on 1H.\n\n2. Analyze the Tokyo Session on 5M.\n\n3. Identify the Trade: Look for a breakout in the direction of your bias and locate the swing block.\n\n4. Manage Risk: +5 pips stop-loss buffer, aim for 2.5R.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    },
    {
      title: "Live Trading the Reversal Method",
      desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
      status: "preview",
      videoId: "CICleAnoMXE",
      assignmentText: "ASSIGNMENT: Live Trading the Reversal Method\n━━━━━━━━━━━━━━━━━━━━\n\n1. Define the \"Reversal Method\" and how to identify a trend reversal.\n\n2. Locate a swing block on a higher timeframe (e.g., 2H) as a valid reversal entry point.\n\n3. Explain stop-loss calculation and why a conservative 1R target might be chosen.\n\n4. Practice the 1-minute confirmation entry and the significance of a break of structure.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery"
    }
  ];

  // ===== COUNTDOWN TIMER =====
  function startCountdown() {
    // Set the date 15 days from now
    var countDownDate = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;

    function updateTimer() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // Time calculations
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display
      document.getElementById("days").textContent = days.toString().padStart(2, "0");
      document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

      // If countdown is over
      if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = '<div class="expired">Offer Expired</div>';
      }
    }

    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);
  }

  function promptReferral() {
    // Not needed for free access, but keep in case
    return "";
  }

  function openWhatsAppWithReferral() {
    var url = buildWhatsAppUrl("");
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
      row.className = "lecture-item";

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
      assignmentBtn.onclick = (function(t, a) { return function() { downloadAssignment(t, a); }; })(item.title, item.assignmentText);
      actions.appendChild(assignmentBtn);

      var badge = document.createElement("span");
      badge.className = "badge-status preview";
      badge.textContent = "Free";
      actions.appendChild(badge);

      // All lectures are watchable
      var playBtn = document.createElement("button");
      playBtn.className = "btn-preview";
      playBtn.type = "button";
      playBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Watch';
      playBtn.onclick = (function(vid) {
        return function() {
          var pv = document.getElementById("previewVideo");
          if (pv) pv.src = "https://www.youtube.com/embed/" + vid + "?rel=0&modestbranding=1";
          document.getElementById("previewSection").scrollIntoView({ behavior: "smooth", block: "start" });
        };
      })(item.videoId);
      actions.appendChild(playBtn);

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
    startCountdown();
    typeText();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
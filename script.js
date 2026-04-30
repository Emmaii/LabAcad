(function() {
  var whatsappNumber = "2347031763615";
  var baseMessage = "Hi, I want free access to the Gold Mastery course. Is it still available?";
  
  function buildWhatsAppUrl() { 
    return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(baseMessage); 
  }
  
  function openWhatsApp() { 
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer"); 
  }

  var lectureData = [
    { title: "Finding Bias", desc: "Master the art of determining market direction and bias identification.", videoId: "RraPVl3lPg0", assignmentText: "ASSIGNMENT: Finding Bias\n━━━━━━━━━━━━━━━━━━━━\n\n1. Technical Setup: Set up your chart on the 2-hour time frame and install the Smart Money Concept indicator by LuxAlgo.\n\n2. Indicator Optimization: Clean up the chart by removing unnecessary elements, including internal structures, internal blocks, and equal highs/lows, to reduce noise.\n\n3. Conceptual Research: Research and explain the core difference between a Break of Structure (BOS) and a Change of Character (CHOCH).\n\n4. Practical Application: Analyze the current market bias for the SPX 500 index using the method taught in the video.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery" },
    { title: "The 3-Hour Trading Window That Eliminates Bad Trades", desc: "Learn the specific time window that filters out noise and improves probability.", videoId: "bI4NIjkAC34", assignmentText: "ASSIGNMENT: The 3-Hour Trading Window\n━━━━━━━━━━━━━━━━━━━━\n\n1. Identify and map out the Tokyo session: Use the Sessions indicator mentioned in the video to clear your chart of unnecessary information and isolate the Tokyo session.\n\n2. Apply it to a different asset: Perform this analysis specifically on the SPX 500 index.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery" },
    { title: "POI — Where to Buy", desc: "Identifying Points of Interest and optimal entry zones.", videoId: "7rDJikdlBwY", assignmentText: "ASSIGNMENT: POI — Where to Buy\n━━━━━━━━━━━━━━━━━━━━\n\n1. Identify Market Bias: Start by analyzing the 1-hour timeframe to determine your overall trend bias.\n\n2. Determine Entry Zone: Move to the 5-minute timeframe to identify the specific area where you should look to buy or sell.\n\n3. Analyze Tokyo Session: Within the 5-minute chart, look at the Tokyo session range.\n   • If the market has \"cleared\" the Tokyo range in the direction of your trend, confirm the bias.\n   • If it moves against, do not trade.\n\n4. Locate the Order Block: Find the 5-minute swing order block within that session to place your trade.\n\n5. Apply to Indices: Perform this analysis on SPX and NAS.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery" },
    { title: "From Setup to Profit — Real Trade Breakdown", desc: "Step-by-step analysis of a real trade from entry to exit.", videoId: "-wHaZyAtZ6M", assignmentText: "ASSIGNMENT: From Setup to Profit\n━━━━━━━━━━━━━━━━━━━━\n\n1. Trend Identification: Analyze the market on the 1-hour timeframe to confirm structural bias.\n\n2. Session Analysis: Identify the Tokyo session and observe price action.\n\n3. Precision Entry Execution: Switch to the 5-minute timeframe to identify the swing block and set your order.\n\n4. Risk Management: Apply stop-loss buffer (+5 pips) and target at least 2.5R.\n\nDELIVERABLES:\n• Chart Screenshot with entry, SL, TP.\n• Trade Journal explaining your reasoning.\n• Reflection: Why the 5-minute timeframe over higher noise timeframes.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery" },
    { title: "Everything Combined — This is how to Trade Daily", desc: "Bringing all concepts together into one comprehensive trading approach.", videoId: "q0Pbg85AHQU", assignmentText: "ASSIGNMENT: Everything Combined\n━━━━━━━━━━━━━━━━━━━━\n\n1. Determine Trend Bias on 1H.\n\n2. Analyze the Tokyo Session on 5M.\n\n3. Identify the Trade: Look for a breakout in the direction of your bias and locate the swing block.\n\n4. Manage Risk: +5 pips stop-loss buffer, aim for 2.5R.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery" },
    { title: "Live Trading the Reversal Method", desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.", videoId: "CICleAnoMXE", assignmentText: "ASSIGNMENT: Live Trading the Reversal Method\n━━━━━━━━━━━━━━━━━━━━\n\n1. Define the \"Reversal Method\" and how to identify a trend reversal.\n\n2. Locate a swing block on a higher timeframe (e.g., 2H) as a valid reversal entry point.\n\n3. Explain stop-loss calculation and why a conservative 1R target might be chosen.\n\n4. Practice the 1-minute confirmation entry and the significance of a break of structure.\n\n━━━━━━━━━━━━━━━━━━━━\n© Lab Acad Gold Mastery" }
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
          <div><div class="lecture-title">${escapeHtml(item.title)}</div><div class="lecture-meta">${escapeHtml(item.desc)}</div></div>
        </div>
        <div class="lecture-actions">
          <button class="btn-assignment" data-assignment><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg> Assignment</button>
          <span class="badge-status preview">Free</span>
          <button class="btn-preview" data-preview><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Watch</button>
        </div>
      `;
      
      var assignBtn = row.querySelector("[data-assignment]");
      assignBtn.onclick = (function(t, a) { return function() { downloadAssignment(t, a); }; })(item.title, item.assignmentText);
      
      var watchBtn = row.querySelector("[data-preview]");
      watchBtn.onclick = (function(vid) {
        return function() {
          var iframe = document.getElementById("previewVideo");
          if (iframe) iframe.src = "https://www.youtube.com/embed/" + vid + "?rel=0&modestbranding=1";
          document.getElementById("previewSection").scrollIntoView({ behavior: "smooth", block: "start" });
        };
      })(item.videoId);
      
      container.appendChild(row);
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  }

  function startCountdown() {
    var end = new Date("May 15, 2026 23:59:59").getTime();
    var timer = setInterval(function() {
      var now = new Date().getTime();
      var dist = end - now;
      if (dist < 0) { 
        clearInterval(timer); 
        document.getElementById("countdown").innerHTML = '<div class="expired">Offer Expired</div>'; 
        return; 
      }
      document.getElementById("days").textContent = Math.floor(dist / (1000*60*60*24)).toString().padStart(2,'0');
      document.getElementById("hours").textContent = Math.floor((dist % (86400000)) / 3600000).toString().padStart(2,'0');
      document.getElementById("minutes").textContent = Math.floor((dist % 3600000) / 60000).toString().padStart(2,'0');
      document.getElementById("seconds").textContent = Math.floor((dist % 60000) / 1000).toString().padStart(2,'0');
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
    var whatsappButtons = document.querySelectorAll("#whatsappTop, #whatsappHero, #whatsappExecution, #whatsappBottom");
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
    
    // Initialize TradingView widget
    if (typeof TradingView !== 'undefined') {
      new TradingView.widget({
        "container_id": "tradingview_xauusd",
        "width": "100%",
        "height": 400,
        "symbol": "OANDA:XAUUSD",
        "interval": "240",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#0b0d10",
        "enable_publishing": false,
        "hide_side_toolbar": true,
        "allow_symbol_change": false,
        "studies": [],
        "show_popup_button": false,
        "popup_width": "1000",
        "popup_height": "650"
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
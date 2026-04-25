// WhatsApp Configuration
var whatsappNumber = "2347031763615";
var baseMessage = "Hi I'm interested in learning how to trade Gold profitable and consistently";

function buildWhatsAppUrl(referralCode) {
  referralCode = referralCode || "";
  var message = baseMessage;
  if (referralCode.trim() !== "") {
    message += "%0A%0AReferral Code: " + encodeURIComponent(referralCode.trim());
  }
  return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
}

// Lecture Data
var lectureData = [
  {
    title: "Finding Bias",
    desc: "Master the art of determining market direction and bias identification.",
    status: "preview",
    videoId: "RraPVl3lPg0",
    assignmentText: "Assignment: Finding Bias\n\n1. Open your XAUUSD chart on the daily timeframe.\n2. Mark the major highs and lows from the last 3 months.\n3. Identify whether the market is in an uptrend, downtrend, or ranging.\n4. Drop down to the 4H timeframe and confirm your bias.\n5. Write a short paragraph explaining your directional bias with 2-3 reasons.\n6. Take a screenshot and save it for your records."
  },
  {
    title: "The 3-Hour Trading Window That Eliminates Bad Trades",
    desc: "Learn the specific time window that filters out noise and improves probability.",
    status: "locked",
    videoId: "",
    assignmentText: "Assignment: The 3-Hour Trading Window\n\n1. Identify the 3-hour window discussed in the lecture on your chart.\n2. For 3 consecutive trading days, only analyze XAUUSD during this window.\n3. Log every trade setup you see (entry, stop loss, take profit).\n4. Track how many setups would have been winners vs losers.\n5. Compare your results to trading outside this window.\n6. Write down your observations about spread, volatility, and clarity."
  },
  {
    title: "POI — Where to Buy",
    desc: "Identifying Points of Interest and optimal entry zones.",
    status: "locked",
    videoId: "",
    assignmentText: "Assignment: Points of Interest (POI)\n\n1. On the 4H XAUUSD chart, mark all POI zones as shown in the lecture.\n2. Identify at least 5 valid POI zones from the past 2 weeks.\n3. For each POI, note the type (order block, breaker, FVG, etc.).\n4. Wait for price to revisit one of your marked zones.\n5. Document how price reacted — did it respect or break the zone?\n6. Take screenshots before and after price reaches your POI."
  },
  {
    title: "From Setup to Profit — Real Trade Breakdown",
    desc: "Step-by-step analysis of a real trade from entry to exit.",
    status: "locked",
    videoId: "",
    assignmentText: "Assignment: Real Trade Breakdown\n\n1. Review the trade example shown in the lecture step by step.\n2. Find a similar setup on your own XAUUSD chart from the last week.\n3. Document: entry reason, stop loss placement, take profit target.\n4. Calculate your risk-to-reward ratio for this trade.\n5. Write a trade journal entry explaining what you would have done.\n6. Compare your analysis to what actually happened in the market."
  },
  {
    title: "Everything Combined — This is how to Trade Daily",
    desc: "Bringing all concepts together into one comprehensive trading approach.",
    status: "locked",
    videoId: "",
    assignmentText: "Assignment: Daily Trading Routine\n\n1. Create a pre-market checklist based on all previous lectures.\n2. Practice your full routine for 5 trading days.\n3. Each day: check bias, wait for the 3-hour window, identify POI, look for entry.\n4. Journal every trade idea, even if you don't enter.\n5. Rate your discipline out of 10 each day.\n6. Write a summary of what improved and what needs work."
  },
  {
    title: "Live Trading the Reversal Method",
    desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
    status: "locked",
    videoId: "",
    assignmentText: "Assignment: Live Reversal Practice\n\n1. Watch the live trading session twice — once for observation, once for note-taking.\n2. Identify 3 reversal setups on XAUUSD using the method shown.\n3. For each setup, mark: the reversal signal, confirmation candle, entry, SL, and TP.\n4. Paper trade (demo account) these 3 setups and track the outcomes.\n5. Record a short video or voice note explaining your best trade.\n6. Review your performance — what did you learn from watching the live session?"
  }
];

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  
  // Get DOM elements
  var lectureList = document.getElementById("lectureList");
  var previewVideo = document.getElementById("previewVideo");
  var whatsappTop = document.getElementById("whatsappTop");
  var whatsappHero = document.getElementById("whatsappHero");
  var whatsappBottom = document.getElementById("whatsappBottom");
  var yearEl = document.getElementById("year");

  // Set copyright year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initialize preview video
  if (previewVideo && lectureData.length > 0) {
    previewVideo.src = "https://www.youtube.com/embed/" + lectureData[0].videoId + "?rel=0&modestbranding=1";
  }

  // Prompt for referral code
  function promptReferral() {
    var referralCode = prompt(
      "💰 REFERRAL PROGRAM 💰\n\nGot a friend who referred you?\nEnter their WhatsApp number below and they earn ₦5,000!\n\n(Leave empty if you don't have a referral code)",
      ""
    );
    return referralCode || "";
  }

  // Open WhatsApp with referral
  function openWhatsAppWithReferral() {
    var referralCode = promptReferral();
    var url = buildWhatsAppUrl(referralCode);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  // Set WhatsApp link handlers
  var whatsappLinks = [whatsappTop, whatsappHero, whatsappBottom];
  for (var i = 0; i < whatsappLinks.length; i++) {
    (function(link) {
      if (link) {
        link.addEventListener("click", function(e) {
          e.preventDefault();
          openWhatsAppWithReferral();
        });
      }
    })(whatsappLinks[i]);
  }

  // Download assignment function
  function downloadAssignment(lectureTitle, assignmentText) {
    var content = "Lab Acad Gold Mastery\n" + lectureTitle + "\n\n" + assignmentText + "\n\n---\n© Lab Acad Gold Mastery";
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

  // Create lecture item
  function createLectureItem(item, index) {
    var row = document.createElement("div");
    row.className = "lecture-item" + (item.status === "locked" ? " locked-item" : "");

    // Main section
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

    // Actions section
    var actions = document.createElement("div");
    actions.className = "lecture-actions";

    // Assignment button - always visible
    var assignmentBtn = document.createElement("button");
    assignmentBtn.className = "btn-assignment";
    assignmentBtn.type = "button";
    assignmentBtn.innerHTML = '📄 Assignment';
    assignmentBtn.onclick = function() {
      downloadAssignment(item.title, item.assignmentText);
    };
    actions.appendChild(assignmentBtn);

    // Status badge
    var badge = document.createElement("span");
    badge.className = "badge " + item.status;
    badge.textContent = item.status === "preview" ? "Preview" : "Locked";
    actions.appendChild(badge);

    // Preview or Lock button
    if (item.status === "preview") {
      var playButton = document.createElement("button");
      playButton.className = "play-btn primary";
      playButton.type = "button";
      playButton.textContent = "▶ Watch Preview";
      playButton.onclick = function() {
        previewVideo.src = "https://www.youtube.com/embed/" + item.videoId + "?rel=0&modestbranding=1";
        var previewSection = document.getElementById("previewSection");
        if (previewSection) {
          previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      actions.appendChild(playButton);
    } else {
      var lockButton = document.createElement("button");
      lockButton.className = "play-btn";
      lockButton.type = "button";
      lockButton.innerHTML = '🔒 Locked';
      lockButton.onclick = function() {
        openWhatsAppWithReferral();
      };
      actions.appendChild(lockButton);
    }

    row.appendChild(main);
    row.appendChild(actions);

    return row;
  }

  // Render all lectures
  function renderLectures() {
    if (!lectureList) {
      console.error("lectureList element not found!");
      return;
    }
    lectureList.innerHTML = "";
    for (var i = 0; i < lectureData.length; i++) {
      lectureList.appendChild(createLectureItem(lectureData[i], i));
    }
  }

  // Render lectures
  renderLectures();

  console.log("Lab Acad Gold Mastery - Loaded Successfully");
  console.log("Lectures rendered: " + lectureData.length);
});
const whatsappNumber = "2347031763615";
const baseMessage = "Hi I'm interested in learning how to trade Gold profitable and consistently";

function buildWhatsAppUrl(referralCode = "") {
  let message = baseMessage;
  if (referralCode.trim() !== "") {
    message += `%0A%0AReferral Code: ${encodeURIComponent(referralCode.trim())}`;
  }
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

const whatsappUrl = buildWhatsAppUrl();

const lectureData = [
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
    assignmentText: "Assignment: Daily Trading Routine\n\n1. Create a pre-market checklist based on all previous lectures.\n2. Practice your full routine for 5 trading days.\n3. Each day: check bias → wait for the 3-hour window → identify POI → look for entry.\n4. Journal every trade idea, even if you don't enter.\n5. Rate your discipline out of 10 each day.\n6. Write a summary of what improved and what needs work."
  },
  {
    title: "Live Trading the Reversal Method",
    desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
    status: "locked",
    videoId: "",
    assignmentText: "Assignment: Live Reversal Practice\n\n1. Watch the live trading session twice — once for observation, once for note-taking.\n2. Identify 3 reversal setups on XAUUSD using the method shown.\n3. For each setup, mark: the reversal signal, confirmation candle, entry, SL, and TP.\n4. Paper trade (demo account) these 3 setups and track the outcomes.\n5. Record a short video or voice note explaining your best trade.\n6. Review your performance — what did you learn from watching the live session?"
  }
];

const lectureList = document.getElementById("lectureList");
const previewVideo = document.getElementById("previewVideo");
const whatsappTop = document.getElementById("whatsappTop");
const whatsappHero = document.getElementById("whatsappHero");
const whatsappBottom = document.getElementById("whatsappBottom");
const yearEl = document.getElementById("year");

function promptReferral() {
  const referralCode = prompt(
    "💰 REFERRAL PROGRAM 💰\n\nGot a friend who referred you?\nEnter their WhatsApp number below and they earn ₦5,000!\n\n(Leave empty if you don't have a referral code)",
    ""
  );
  return referralCode || "";
}

function openWhatsAppWithReferral(link) {
  const referralCode = promptReferral();
  const url = buildWhatsAppUrl(referralCode);
  window.open(url, "_blank", "noopener,noreferrer");
}

function setWhatsAppLinks() {
  [whatsappTop, whatsappHero, whatsappBottom].forEach((link) => {
    if (link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        openWhatsAppWithReferral(this);
      });
    }
  });
}

function downloadAssignment(lectureTitle, assignmentText) {
  const content = `Lab Acad Gold Mastery\n${lectureTitle}\n\n${assignmentText}\n\n---\n© Lab Acad Gold Mastery`;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${lectureTitle.replace(/[^a-zA-Z0-9]/g, "_")}_Assignment.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function createLectureItem(item, index) {
  const row = document.createElement("div");
  row.className = `lecture-item ${item.status === "locked" ? "locked-item" : ""}`;

  const main = document.createElement("div");
  main.className = "lecture-main";

  const indexBox = document.createElement("div");
  indexBox.className = "lecture-index";
  indexBox.textContent = index + 1;

  const textWrap = document.createElement("div");

  const title = document.createElement("div");
  title.className = "lecture-title";
  title.textContent = item.title;

  const desc = document.createElement("div");
  desc.className = "lecture-meta";
  desc.textContent = item.desc;

  textWrap.appendChild(title);
  textWrap.appendChild(desc);

  main.appendChild(indexBox);
  main.appendChild(textWrap);

  const actions = document.createElement("div");
  actions.className = "lecture-actions";

  // Assignment button - always unlocked, downloads the assignment
  const assignmentBtn = document.createElement("button");
  assignmentBtn.className = "btn-assignment";
  assignmentBtn.type = "button";
  assignmentBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
    Assignment
  `;
  assignmentBtn.addEventListener("click", () => {
    downloadAssignment(item.title, item.assignmentText);
  });
  actions.appendChild(assignmentBtn);

  const badge = document.createElement("span");
  badge.className = `badge ${item.status}`;
  badge.textContent = item.status === "preview" ? "Preview" : "Locked";
  actions.appendChild(badge);

  if (item.status === "preview") {
    const playButton = document.createElement("button");
    playButton.className = "play-btn primary";
    playButton.type = "button";
    playButton.textContent = "Watch Preview";
    playButton.addEventListener("click", () => {
      previewVideo.src = `https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`;
      document.getElementById("previewSection").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    actions.appendChild(playButton);
  } else {
    const lockButton = document.createElement("button");
    lockButton.className = "play-btn";
    lockButton.type = "button";
    lockButton.innerHTML = `🔒 Locked`;
    lockButton.addEventListener("click", () => {
      openWhatsAppWithReferral(lockButton);
    });
    actions.appendChild(lockButton);
  }

  row.appendChild(main);
  row.appendChild(actions);

  return row;
}

function renderLectures() {
  lectureList.innerHTML = "";
  lectureData.forEach((item, index) => {
    lectureList.appendChild(createLectureItem(item, index));
  });
}

function initPreview() {
  previewVideo.src = `https://www.youtube.com/embed/${lectureData[0].videoId}?rel=0&modestbranding=1`;
}

yearEl.textContent = new Date().getFullYear();

setWhatsAppLinks();
renderLectures();
initPreview();
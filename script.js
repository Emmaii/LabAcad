// WhatsApp Configuration
const whatsappNumber = "2347031763615";
const whatsappMessage = "Hi I'm interested in learning how to trade Gold profitable and consistently";
const encodedMessage = encodeURIComponent(whatsappMessage);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

// LECTURE DATA - CORRECT ORDER (1 to 6)
// Only Lecture 1 is preview - Lectures 2-6 are locked
const lectureData = [
  {
    title: "Finding Bias",
    desc: "Master the art of determining market direction and bias identification. Foundation for all trades.",
    status: "preview",
    videoId: "CICleAnoMXE"  // Using your live trading video as preview
  },
  {
    title: "The 3-Hour Trading Window That Eliminates Bad Trades",
    desc: "Learn the specific time window that filters out noise and dramatically improves probability.",
    status: "locked",
    videoId: ""
  },
  {
    title: "POI — Where to Buy",
    desc: "Identifying Points of Interest and optimal entry zones with precision.",
    status: "locked",
    videoId: ""
  },
  {
    title: "From Setup to Profit — Real Trade Breakdown",
    desc: "Step-by-step analysis of a real trade from entry to exit. See the strategy in action.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Everything Combined — This is how to Trade Daily",
    desc: "Bringing all concepts together into one comprehensive daily trading approach.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Live Trading the Reversal Method",
    desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
    status: "locked",
    videoId: "CICleAnoMXE"
  }
];

// DOM Elements
const lectureList = document.getElementById("lectureList");
const previewVideo = document.getElementById("previewVideo");
const whatsappTop = document.getElementById("whatsappTop");
const whatsappHero = document.getElementById("whatsappHero");
const whatsappBottom = document.getElementById("whatsappBottom");
const yearEl = document.getElementById("year");

// Set all WhatsApp links
function setWhatsAppLinks() {
  const links = [whatsappTop, whatsappHero, whatsappBottom];
  links.forEach((link) => {
    if (link) link.href = whatsappUrl;
  });
}

// Create a single lecture item
function createLectureItem(item, index) {
  const row = document.createElement("div");
  row.className = `lecture-item ${item.status === "locked" ? "locked-item" : ""}`;

  // Main section (left side)
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

  // Actions section (right side)
  const actions = document.createElement("div");
  actions.className = "lecture-actions";

  const badge = document.createElement("span");
  badge.className = `badge ${item.status}`;
  badge.textContent = item.status === "preview" ? "🔓 FREE PREVIEW" : "🔒 LOCKED";
  actions.appendChild(badge);

  if (item.status === "preview") {
    const playButton = document.createElement("button");
    playButton.className = "play-btn primary";
    playButton.type = "button";
    playButton.textContent = "▶ WATCH NOW";
    playButton.addEventListener("click", () => {
      previewVideo.src = `https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&autoplay=0`;
      document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    actions.appendChild(playButton);
  } else {
    const lockButton = document.createElement("button");
    lockButton.className = "play-btn";
    lockButton.type = "button";
    lockButton.textContent = "🔒 UNLOCK";
    lockButton.addEventListener("click", () => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
    actions.appendChild(lockButton);
  }

  row.appendChild(main);
  row.appendChild(actions);

  return row;
}

// Render all lectures
function renderLectures() {
  if (!lectureList) return;
  lectureList.innerHTML = "";
  lectureData.forEach((item, index) => {
    lectureList.appendChild(createLectureItem(item, index));
  });
}

// Initialize preview video with Lecture 1
function initPreview() {
  if (!previewVideo) return;
  const previewLecture = lectureData.find(lecture => lecture.status === "preview");
  if (previewLecture) {
    previewVideo.src = `https://www.youtube.com/embed/${previewLecture.videoId}?rel=0&modestbranding=1`;
  }
}

// Set copyright year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Initialize everything
setWhatsAppLinks();
renderLectures();
initPreview();

console.log("Lab Acad Gold Mastery - Loaded Successfully");
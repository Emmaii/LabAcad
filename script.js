const whatsappNumber = "2347031763615";
const whatsappMessage = "Hi I'm interested in learning how to trade Gold profitable and consistently";
const encodedMessage = encodeURIComponent(whatsappMessage);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

// Lecture Data - Reversed Order
// Lecture 1 = Last video (Live Trading the Reversal Method) - PREVIEW
// Lecture 6 = First video (Finding Bias) - LOCKED
const lectureData = [
  {
    title: "Live Trading the Reversal Method",
    desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
    status: "preview",
    videoId: "CICleAnoMXE"
  },
  {
    title: "Everything Combined — This…",
    desc: "Bringing all concepts together into one comprehensive trading approach.",
    status: "locked",
    videoId: ""
  },
  {
    title: "From Setup to Profit — Real Trade Breakdown",
    desc: "Step-by-step analysis of a real trade from entry to exit.",
    status: "locked",
    videoId: ""
  },
  {
    title: "POI — Where to Buy",
    desc: "Identifying Points of Interest and optimal entry zones.",
    status: "locked",
    videoId: ""
  },
  {
    title: "The 3-Hour Trading Window That Eliminates…",
    desc: "Learn the specific time window that filters out noise and improves probability.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Finding Bias",
    desc: "Master the art of determining market direction and bias identification.",
    status: "locked",
    videoId: ""
  }
];

const lectureList = document.getElementById("lectureList");
const previewVideo = document.getElementById("previewVideo");
const whatsappTop = document.getElementById("whatsappTop");
const whatsappHero = document.getElementById("whatsappHero");
const whatsappBottom = document.getElementById("whatsappBottom");
const yearEl = document.getElementById("year");

function setWhatsAppLinks() {
  [whatsappTop, whatsappHero, whatsappBottom].forEach((link) => {
    if (link) link.href = whatsappUrl;
  });
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
  title.textContent = `Lecture ${index + 1} — ${item.title}`;

  const desc = document.createElement("div");
  desc.className = "lecture-meta";
  desc.textContent = item.desc;

  textWrap.appendChild(title);
  textWrap.appendChild(desc);

  main.appendChild(indexBox);
  main.appendChild(textWrap);

  const actions = document.createElement("div");
  actions.className = "lecture-actions";

  const badge = document.createElement("span");
  badge.className = `badge ${item.status}`;
  badge.textContent = item.status === "preview" ? "🔓 Preview" : "🔒 Locked";

  actions.appendChild(badge);

  if (item.status === "preview") {
    const playButton = document.createElement("button");
    playButton.className = "play-btn primary";
    playButton.type = "button";
    playButton.textContent = "▶ Watch Preview";
    playButton.addEventListener("click", () => {
      previewVideo.src = `https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&autoplay=0`;
      document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    actions.appendChild(playButton);
  } else {
    const lockButton = document.createElement("button");
    lockButton.className = "play-btn";
    lockButton.type = "button";
    lockButton.innerHTML = `🔒 Unlock with Purchase`;
    lockButton.addEventListener("click", () => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
    actions.appendChild(lockButton);
  }

  row.appendChild(main);
  row.appendChild(actions);

  return row;
}

function renderLectures() {
  if (!lectureList) return;
  lectureList.innerHTML = "";
  lectureData.forEach((item, index) => {
    lectureList.appendChild(createLectureItem(item, index));
  });
}

function initPreview() {
  if (!previewVideo) return;
  previewVideo.src = `https://www.youtube.com/embed/${lectureData[0].videoId}?rel=0&modestbranding=1`;
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

setWhatsAppLinks();
renderLectures();
initPreview();
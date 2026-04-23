const whatsappNumber = "2347031763615";
const whatsappMessage = "Hi I'm interested in learning how to trade Gold profitable and consistently";
const encodedMessage = encodeURIComponent(whatsappMessage);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

// Videos in reverse order - last video becomes Lecture 1 (Preview)
// Original order provided: 
// 1. Finding Bias
// 2. The 3-Hour Trading Window
// 3. POI — Where to Buy
// 4. From Setup to Profit — Real Trade Breakdown
// 5. Everything Combined — This…
// 6. Live Trading the Reversal Method
// Reversed order: 6 becomes Lecture 1 (Preview), then 5, 4, 3, 2, 1
const lectureData = [
  {
    title: "Lecture 1 — Live Trading the Reversal Method",
    desc: "Watch a live trading session demonstrating the reversal method in action.",
    status: "preview",
    videoId: "CICleAnoMXE"
  },
  {
    title: "Lecture 2 — Everything Combined — This…",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Lecture 3 — From Setup to Profit — Real Trade Breakdown",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Lecture 4 — POI — Where to Buy",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Lecture 5 — The 3-Hour Trading Window That Eliminates…",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Lecture 6 — Finding Bias",
    desc: "Core lesson locked until purchase.",
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
      document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    actions.appendChild(playButton);
  } else {
    const lockButton = document.createElement("button");
    lockButton.className = "play-btn";
    lockButton.type = "button";
    lockButton.innerHTML = `<span class="lock-icon">🔒</span> Locked`;
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
  lectureList.innerHTML = "";
  lectureData.forEach((item, index) => {
    lectureList.appendChild(createLectureItem(item, index));
  });
}

function initPreview() {
  // Set the first lecture (preview) as the initial video
  previewVideo.src = `https://www.youtube.com/embed/${lectureData[0].videoId}?rel=0&modestbranding=1`;
}

yearEl.textContent = new Date().getFullYear();

setWhatsAppLinks();
renderLectures();
initPreview();
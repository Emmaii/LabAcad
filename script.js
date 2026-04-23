const whatsappNumber = "2347031763615";
const whatsappMessage = "Hi I'm interested in learning how to trade Gold profitable and consistently";
const encodedMessage = encodeURIComponent(whatsappMessage);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

// Lecture 1 (Finding Bias) is the ONLY preview - uses the correct link
const lectureData = [
  {
    title: "Finding Bias",
    desc: "Master the art of determining market direction and bias identification.",
    status: "preview",
    videoId: "RraPVl3lPg0"
  },
  {
    title: "The 3-Hour Trading Window That Eliminates Bad Trades",
    desc: "Learn the specific time window that filters out noise and improves probability.",
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
    title: "From Setup to Profit — Real Trade Breakdown",
    desc: "Step-by-step analysis of a real trade from entry to exit.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Everything Combined — This is how to Trade Daily",
    desc: "Bringing all concepts together into one comprehensive trading approach.",
    status: "locked",
    videoId: ""
  },
  {
    title: "Live Trading the Reversal Method",
    desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
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
      // Update the preview video with Lecture 1
      previewVideo.src = `https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`;
      // Scroll to the preview section at the top of the page
      document.getElementById("previewSection").scrollIntoView({ behavior: "smooth", block: "start" });
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
  // Load Lecture 1 (Finding Bias) with the correct video ID
  previewVideo.src = `https://www.youtube.com/embed/${lectureData[0].videoId}?rel=0&modestbranding=1`;
}

yearEl.textContent = new Date().getFullYear();

setWhatsAppLinks();
renderLectures();
initPreview();
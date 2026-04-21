const whatsappNumber = "2347031763615";
const whatsappMessage = "Hi I'm interested in learning how to trade Gold profitable and consistently";
const encodedMessage = encodeURIComponent(whatsappMessage);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

// Videos in reverse order - last video becomes Lecture 1
// Original order from user: q0Pbg85AHQU, -wHaZyAtZ6M, 7rDJikdlBwY, bI4NIjkAC34, RraPVl3lPg0
// Reversed: RraPVl3lPg0 (Lecture 1), bI4NIjkAC34 (2), 7rDJikdlBwY (3), -wHaZyAtZ6M (4), q0Pbg85AHQU (5)
const lectureData = [
  {
    title: "Lecture 1 — Final Setup & Full Preview",
    desc: "This is the preview lecture. It uses the last video you shared.",
    status: "preview",
    videoId: "RraPVl3lPg0"
  },
  {
    title: "Lecture 2 — Core Strategy",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: "bI4NIjkAC34"
  },
  {
    title: "Lecture 3 — Advanced Concepts",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: "7rDJikdlBwY"
  },
  {
    title: "Lecture 4 — Market Structure",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: "-wHaZyAtZ6M"
  },
  {
    title: "Lecture 5 — Foundation",
    desc: "Core lesson locked until purchase.",
    status: "locked",
    videoId: "q0Pbg85AHQU"
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
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
    assignmentUrl: "#"
  },
  {
    title: "The 3-Hour Trading Window That Eliminates Bad Trades",
    desc: "Learn the specific time window that filters out noise and improves probability.",
    status: "locked",
    videoId: "",
    assignmentUrl: "#"
  },
  {
    title: "POI — Where to Buy",
    desc: "Identifying Points of Interest and optimal entry zones.",
    status: "locked",
    videoId: "",
    assignmentUrl: "#"
  },
  {
    title: "From Setup to Profit — Real Trade Breakdown",
    desc: "Step-by-step analysis of a real trade from entry to exit.",
    status: "locked",
    videoId: "",
    assignmentUrl: "#"
  },
  {
    title: "Everything Combined — This is how to Trade Daily",
    desc: "Bringing all concepts together into one comprehensive trading approach.",
    status: "locked",
    videoId: "",
    assignmentUrl: "#"
  },
  {
    title: "Live Trading the Reversal Method",
    desc: "Watch a complete live trading session demonstrating the reversal method in real market conditions.",
    status: "locked",
    videoId: "",
    assignmentUrl: "#"
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

  // Assignment PDF button - always unlocked
  const assignmentBtn = document.createElement("a");
  assignmentBtn.className = "btn-assignment";
  assignmentBtn.href = item.assignmentUrl;
  assignmentBtn.target = "_blank";
  assignmentBtn.rel = "noopener noreferrer";
  assignmentBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2 2v2v16a16a2 2 2 2 0 0 0 0 0 0 2 22 h12a2 2h12a2 0 2 2 0 0 0 0 0 2-2V2-2V8z"></path8z>
     "></path>
      <polyline points <poly="14line points="14 2  214 8 14 8 20 8 20"></poly 8"></polyline>
line>
           <line x1=" <line x1="16"16" y1 y1="13" x="13" x2="2="8" y28" y2="13="13"></line>
     "></line>
      <line <line x1="16 x1="16" y1="" y17" x21="17" x2="8="8" y" y2="17"></2="17"></line>
     line>
      <polyline <polyline points="10  points="10 9 9 9 9 9 9 8 9"></8 polyline9"></polyline>
    </svg>
    </svg>
    Assignment
>
     ` Assignment
  `;
 ;
  actions.appendChild actions.appendChild(assignment(assignmentBtn);

Btn);

  const badge  const badge = = document.createElement("span document.createElement("span");
  badge.class");
 Name = `bad badge.className = `badge ${ge ${item.statusitem.status}`;
  badge}`;
  badge.textContent = item.textContent = item.status === "pre.status ===view" "preview" ? " ? "Preview"Preview" : "Locked : "";
 Locked actions.appendChild(badge";
  actions.appendChild(badge);

  if ();

  if (item.status === "preview") {
item.status === "preview    const playButton") {
    const = document playButton = document.createElement("button");
.createElement("    playButton.classbutton");
    playButton.className =Name = "play "play-btn primary-btn primary";
    playButton";
    playButton.type = "button.type = "button";
   ";
    playButton.textContent playButton.textContent = " = "Watch PreviewWatch Preview";
    playButton";
   .addEventListener("click", playButton.addEventListener(" () =>click", () => {
      previewVideo {
      previewVideo.src = `https.src = `https://www://www.youtube.com.youtube.com/embed/embed/${item.videoId}/${item.video?relId}?rel=0&mod=0estbranding=&modestbrand1`;
ing=1`;
      document.getElementById("      documentpreviewSection")..getElementById("previewSection").scrollIntoscrollIntoView({View({ behavior: behavior: "smooth", "smooth", block: block: "start "start" });
" });
    });
    actions    });
    actions.appendChild(.appendChild(playButtonplayButton);
  } else);
  {
    } else {
    const lockButton = const lockButton = document.createElement document.createElement("button("button");
   ");
    lockButton lockButton.className = ".classNameplay-btn";
    = "play-btn";
    lockButton.type = lockButton.type = "button "button";
   ";
    lockButton.innerHTML = lockButton `🔒 Lock.innerHTML = `ed`;
    lock🔒 Locked`;
Button.addEventListener("click    lockButton.addEventListener", () => {
("click", ()      open => {
      openWhatsAppWhatsAppWithReferWithReferral(ral(lockButton);
    });
   lockButton);
    });
    actions.appendChild actions.appendChild(lock(lockButton);
Button);
  }

  }

  row  row.appendChild(main);
  row.appendChild(main);
.appendChild(actions);

  row.appendChild(  return row;
actions);

  return row;
}

function}

function renderLect renderLectures()ures() {
  lectureList {
  lectureList.innerHTML = "";
 .innerHTML = "";
  lectureData.forEach(( lectureData.forEach((item,item, index) index) => {
 => {
    lecture    lectureList.appendChild(createList.appendChildLectureItem(item,(createLectureItem index));
  });
(item, index));
  });
}

function initPreview}

function initPreview() {
  preview() {
  previewVideo.srcVideo.src = ` = `https://https://www.youtube.com/www.youtube.com/embed/${lectureData[0].embed/${lectureData[0].videoIdvideoId}?}?rel=rel=0&modest0&branding=1modestbranding`;
}

=1`;
}

yearElyearEl.textContent.textContent = new Date(). = new Date().getFullYear();

getFullYear();

setWhatsAppLinkssetWhatsAppLinks();
renderLectures();
renderLectures();
init();
initPreview();
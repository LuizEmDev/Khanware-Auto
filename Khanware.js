// Khanware V3.1.1 — Developed by @luizsantasuzana

const ver = "V3.1.1";
let isDev = false;

const repoPath = `https://raw.githubusercontent.com/LuizEmDev/Khanware-Auto/${isDev ? "dev" : "main"}/`;

let loadedPlugins = [];

const user = {
  username: "User",
  nickname: "Nickname",
  UID: 0
};

const splashScreen = document.createElement("div");
splashScreen.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;color:white;font-size:28px;font-family:sans-serif;z-index:99999";
splashScreen.innerText = "Khanware is loading...";
document.body.appendChild(splashScreen);

const delay = ms => new Promise(res => setTimeout(res, ms));
const playAudio = url => { const a = new Audio(url); a.play(); };

function sendToast(msg) {
  Toastify({
    text: msg,
    duration: 3000,
    gravity: "bottom",
    position: "center",
    style: { background: "#00cc66", fontFamily: "Arial" }
  }).showToast();
}

async function loadScript(url, label) {
  try {
    const res = await fetch(url);
    const code = await res.text();
    eval(code);
    loadedPlugins.push(label);
    sendToast(`🧩 ${label} loaded`);
  } catch (e) {
    sendToast(`❌ Falha ao carregar ${label}`);
    console.error(e);
  }
}

async function loadCss(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

async function init() {
  await loadCss("https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css");
  await loadScript("https://cdn.jsdelivr.net/npm/toastify-js", "Toastify");
  await delay(500);

  await loadScript(repoPath + "functions/questionSpoof.js", "Spoof de Questões");
  await loadScript(repoPath + "functions/videoSpoof.js", "Spoof de Vídeos");
  await loadScript(repoPath + "functions/minuteFarmer.js", "Minute Farmer");
  await loadScript(repoPath + "visuals/mainMenu.js", "Menu");
  await loadScript(repoPath + "visuals/widgetBot.js", "Music Player");

  splashScreen.remove();
  sendToast("✅ Khanware carregado!");
}

init();

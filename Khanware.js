// Developed by @luizsantasuzana
const ver = "V3.1.1";

const repoPath = "./"; // agora carrega tudo local

let loadedPlugins = [];

document.head.appendChild(Object.assign(document.createElement('style'), {
    innerHTML: `@font-face {
      font-family: 'MuseoSans';
      src: url('https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/ynddewua.ttf') format('truetype');
    }`
}));

function sendToast(text) {
    Toastify({
        text,
        duration: 3000,
        gravity: "bottom",
        position: "center",
        style: {
            background: "#00cc66",
            fontFamily: "MuseoSans, sans-serif"
        }
    }).showToast();
}

function loadScript(path, label) {
    return fetch(path).then(res => res.text()).then(code => {
        loadedPlugins.push(label);
        eval(code);
        sendToast(`🧩 ${label} carregado`);
    });
}

function loadCss(path) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    document.head.appendChild(link);
}

// Carregar módulos
loadCss('https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css');
loadScript('https://cdn.jsdelivr.net/npm/toastify-js', 'toastify');

loadScript('./functions/questionSpoof.js', 'questionSpoof');
loadScript('./functions/videoSpoof.js', 'videoSpoof');
loadScript('./functions/minuteFarmer.js', 'minuteFarmer');

loadScript('./visuals/mainMenu.js', 'mainMenu');
loadScript('./visuals/youtubePlayer.js', 'YouTube Music');

console.log(`✅ Khanware ${ver} iniciado — Developed by @luizsantasuzana`);

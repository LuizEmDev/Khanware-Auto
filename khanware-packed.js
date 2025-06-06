// Khanware Packed — Developed by @luizsantasuzana
(async () => {
  const toastifyStyle = document.createElement("link");
  toastifyStyle.rel = "stylesheet";
  toastifyStyle.href = "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css";
  document.head.appendChild(toastifyStyle);

  await new Promise((res) => setTimeout(res, 300));

  await import("https://cdn.jsdelivr.net/npm/toastify-js");

  const sendToast = (text) => Toastify({
    text,
    duration: 3000,
    gravity: "bottom",
    position: "center",
    style: {
      background: "#00cc66",
      fontFamily: "Arial"
    }
  }).showToast();

  // Minute Farmer (5–8 min simulados)
  const farmMinutes = () => {
    const min = Math.floor(Math.random() * 4) + 5;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed++;
      sendToast(`🕒 Minuto ${elapsed}/${min}`);
      if (elapsed >= min) {
        clearInterval(interval);
        sendToast("✅ Farming concluído!");
      }
    }, 60000);
  };

  // Questão Spoofer
  const spoofQuestions = () => {
    document.querySelectorAll('[data-test=correct-choice]').forEach(el => {
      el.style.border = '2px solid #00ff00';
    });
    sendToast("✅ Questões spoofadas");
  };

  // Vídeo Spoofer
  const spoofVideo = () => {
    const video = document.querySelector('video');
    if (video) {
      video.currentTime = video.duration - 1;
      video.dispatchEvent(new Event('timeupdate'));
      video.dispatchEvent(new Event('ended'));
      sendToast("✅ Vídeo spoofado");
    } else {
      sendToast("❌ Nenhum vídeo encontrado");
    }
  };

  // YouTube Music Player
  const addYouTubePlayer = () => {
    const ytContainer = document.createElement('div');
    ytContainer.style = `
      position: fixed;
      bottom: 10px;
      left: 10px;
      width: 300px;
      background: #222;
      color: white;
      padding: 10px;
      border-radius: 8px;
      z-index: 9999;
    `;
    ytContainer.innerHTML = `
      <input type="text" id="ytSearch" placeholder="🔍 Nome da música" style="width: 100%;"><br><br>
      <button onclick="(function(){
        const term = document.getElementById('ytSearch').value.trim();
        const url = 'https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(term);
        document.getElementById('ytPlayer').innerHTML = '<iframe width="100%" height="200" src=\"' + url + '\" frameborder=\"0\" allowfullscreen></iframe>';
      })()">▶️ Tocar</button>
      <div id="ytPlayer" style="margin-top:10px;"></div>
    `;
    document.body.appendChild(ytContainer);
    sendToast("🎵 Player de música aberto");
  };

  // Menu Flutuante
  const menu = document.createElement('div');
  menu.style = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: #111;
    padding: 15px;
    border-radius: 8px;
    font-family: sans-serif;
    color: white;
    z-index: 9999;
  `;
  menu.innerHTML = `
    <h3 style="margin-top:0; color:#72ff72;">Khanware</h3>
    <button onclick="(${farmMinutes.toString()})()">🧠 Farmar Minutos</button><br><br>
    <button onclick="(${spoofQuestions.toString()})()">✅ Spoofar Questões</button><br><br>
    <button onclick="(${spoofVideo.toString()})()">📺 Spoofar Vídeo</button><br><br>
    <button onclick="(${addYouTubePlayer.toString()})()">🎵 Tocar Música</button><br><br>
    <div style="font-size:12px;opacity:0.7;">Developed by @luizsantasuzana</div>
  `;
  document.body.appendChild(menu);

  sendToast("💚 Khanware carregado com sucesso!");
})();

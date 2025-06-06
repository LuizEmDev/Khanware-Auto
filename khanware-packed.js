// Khanware — Versão estável final — by @luizsantasuzana

(function () {
  // Carregar Toastify
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/toastify-js';
  script.onload = main;
  document.head.appendChild(script);

  function toast(msg) {
    Toastify({
      text: msg,
      duration: 3000,
      gravity: "bottom",
      position: "center",
      style: {
        background: "#00cc66",
        fontFamily: "Arial"
      }
    }).showToast();
  }

  function main() {
    toast("✅ Khanware carregado!");

    const farmMinutes = () => {
      const min = Math.floor(Math.random() * 4) + 5;
      let elapsed = 0;
      const interval = setInterval(() => {
        elapsed++;
        toast(`🕒 Minuto ${elapsed}/${min}`);
        if (elapsed >= min) {
          clearInterval(interval);
          toast("✅ Farming concluído!");
        }
      }, 60000);
    };

    const spoofQuestions = () => {
      document.querySelectorAll('[data-test=correct-choice]').forEach(el => {
        el.style.border = '2px solid #00ff00';
      });
      toast("✅ Questões spoofadas");
    };

    const spoofVideo = () => {
      const video = document.querySelector('video');
      if (video) {
        video.currentTime = video.duration - 1;
        video.dispatchEvent(new Event('timeupdate'));
        video.dispatchEvent(new Event('ended'));
        toast("✅ Vídeo spoofado");
      } else {
        toast("❌ Nenhum vídeo encontrado");
      }
    };

    const musicPlayer = () => {
      const box = document.createElement('div');
      box.style = "position:fixed;bottom:10px;left:10px;width:300px;background:#222;color:white;padding:10px;border-radius:8px;z-index:9999;";
      box.innerHTML = `
        <input type="text" id="ytSearch" placeholder="🔍 Nome da música" style="width: 100%;"><br><br>
        <button onclick="(() => {
          const q = document.getElementById('ytSearch').value.trim();
          document.getElementById('ytPlayer').innerHTML = '<iframe width=100% height=200 src=\'https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(q) + '\' frameborder=0 allowfullscreen></iframe>';
        })()">▶️ Tocar</button>
        <div id="ytPlayer" style="margin-top:10px;"></div>
      `;
      document.body.appendChild(box);
      toast("🎵 Player de música aberto");
    };

    const menu = document.createElement('div');
    menu.style = "position:fixed;top:10px;right:10px;background:#111;padding:15px;border-radius:8px;font-family:sans-serif;color:white;z-index:9999;";
    menu.innerHTML = `
      <h3 style="margin:0;color:#72ff72;">Khanware</h3>
      <button onclick="(${farmMinutes.toString()})()">🧠 Farmar Minutos</button><br><br>
      <button onclick="(${spoofQuestions.toString()})()">✅ Spoofar Questões</button><br><br>
      <button onclick="(${spoofVideo.toString()})()">📺 Spoofar Vídeo</button><br><br>
      <button onclick="(${musicPlay

// Khanware — versão final — Developed by @luizsantasuzana

(function () {
  const injectCSS = () => {
    const toastify = document.createElement('link');
    toastify.rel = 'stylesheet';
    toastify.href = 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css';
    document.head.appendChild(toastify);

    const font = document.createElement('style');
    font.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      * { font-family: 'Roboto', sans-serif !important; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-thumb { background: #00ff88; border-radius: 6px; }
    `;
    document.head.appendChild(font);
  };

  const injectToastify = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/toastify-js';
    script.onload = callback;
    document.head.appendChild(script);
  };

  const main = () => {
    const toast = (msg) => {
      Toastify({
        text: msg,
        duration: 3000,
        gravity: "bottom",
        position: "center",
        style: {
          background: "#00cc66",
          color: "#fff"
        }
      }).showToast();
    };

    const spoofQuestions = () => {
      const correct = document.querySelector('[data-test="correct-choice"]');
      if (correct) {
        correct.style.border = "2px solid #00ff00";
        correct.style.backgroundColor = "#003300";
        toast("✅ Alternativa correta destacada");
      } else {
        toast("❌ Nenhuma alternativa encontrada");
      }
    };

    const spoofVideo = () => {
      const video = document.querySelector("video");
      if (video) {
        video.currentTime = video.duration - 1;
        video.dispatchEvent(new Event("timeupdate"));
        video.dispatchEvent(new Event("ended"));
        toast("📺 Vídeo spoofado com sucesso");
      } else {
        toast("❌ Nenhum vídeo encontrado");
      }
    };

    const farmMinutes = () => {
      const minutes = Math.floor(Math.random() * 4) + 5; // 5–8 min
      let count = 0;
      const interval = setInterval(() => {
        count++;
        toast(`🕒 Minuto ${count}/${minutes}`);
        if (count >= minutes) {
          clearInterval(interval);
          toast("✅ Farming concluído");
        }
      }, 60000);
    };

    const buildMenu = () => {
      const menu = document.createElement("div");
      menu.style = `
        position: fixed;
        top: 15px;
        right: 15px;
        background: #111;
        padding: 15px;
        border: 2px solid #00ff88;
        border-radius: 10px;
        z-index: 9999;
        color: white;
        font-size: 14px;
        box-shadow: 0 0 10px #00ff88;
      `;
      menu.innerHTML = `
        <div style="font-size: 18px; margin-bottom: 10px; color: #00ff88;">Khanware ⚙️</div>
        <button onclick="(${farmMinutes.toString()})()" style="width:100%;margin:5px 0;">🧠 Farmar Minutos</button>
        <button onclick="(${spoofQuestions.toString()})()" style="width:100%;margin:5px 0;">✅ Spoofar Questões</button>
        <button onclick="(${spoofVideo.toString()})()" style="width:100%;margin:5px 0;">📺 Spoofar Vídeo</button>
        <input id="ytTerm" type="text" placeholder="🎵 Buscar música" style="width:100%;margin-top:10px;padding:4px;">
        <button onclick="(() => {
          const q = document.getElementById('ytTerm').value;
          document.getElementById('ytFrame').src = 'https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(q);
        })()" style="width:100%;margin:5px 0;">🔍 Tocar</button>
        <iframe id="ytFrame" width="100%" height="150" style="margin-top:5px;border:none;" allowfullscreen></iframe>
        <div style="margin-top:8px;font-size:11px;opacity:0.6;text-align:center;">Developed by @luizsantasuzana</div>
      `;
      document.body.appendChild(menu);
    };

    toast("💚 Khanware carregado com sucesso");
    buildMenu();
  };

  injectCSS();
  injectToastify(main);
})();

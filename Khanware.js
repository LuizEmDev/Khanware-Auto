// ==Khanware Enhanced==
// Developed by @LuizEmDev | Automação Educacional para Khan Academy

(async function () {
  if (window.__KAHelperLoaded) return;
  window.__KAHelperLoaded = true;

  let autoMode = true;
  let speed = 2000;

  // Estilo do menu
  const style = document.createElement("style");
  style.textContent = `
    #kaMenu {
      position: fixed;
      top: 10px;
      right: 10px;
      z-index: 99999;
      background: #ffffffee;
      border: 1px solid #ccc;
      padding: 15px;
      width: 260px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.15);
      font-family: sans-serif;
    }
    #kaMenu input, #kaMenu button {
      margin-top: 8px;
      width: 100%;
      padding: 6px;
      font-size: 13px;
    }
    #kaMenu h3 {
      margin: 0 0 10px;
      font-size: 16px;
    }
    #kaMenu small {
      display: block;
      margin-top: 10px;
      font-size: 11px;
      text-align: center;
      color: #555;
    }
  `;
  document.head.appendChild(style);

  // Criação do menu
  const menu = document.createElement("div");
  menu.id = "kaMenu";
  menu.innerHTML = `
    <h3>KA Automator</h3>
    <label><input type="checkbox" id="kaAuto" checked> Auto Mode</label>
    <label>Speed <input type="range" id="kaSpeed" min="500" max="5000" step="500" value="2000"></label>
    <input type="text" id="kaMusicInput" placeholder="Nome da música no YouTube" />
    <button id="kaPlayMusic">🎵 Tocar Música</button>
    <button id="kaRunOnce">▶️ Executar Agora</button>
    <small>Developed by @luizsantasuzana</small>
  `;
  document.body.appendChild(menu);

  // Elementos de controle
  document.getElementById("kaAuto").onchange = e => autoMode = e.target.checked;
  document.getElementById("kaSpeed").oninput = e => speed = parseInt(e.target.value);
  document.getElementById("kaRunOnce").onclick = () => runBot();

  document.getElementById("kaPlayMusic").onclick = async () => {
    const query = document.getElementById("kaMusicInput").value.trim();
    if (!query) return alert("Digite o nome da música.");
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    try {
      const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
      const html = await res.text();
      const videoId = html.match(/"videoId":"(.*?)"/)?.[1];
      if (!videoId) throw "Nenhum vídeo encontrado.";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.style.display = "none";
      iframe.id = "ytMusicPlayer";
      iframe.allow = "autoplay";
      document.body.appendChild(iframe);
    } catch (err) {
      alert("Erro ao buscar vídeo.");
    }
  };

  function spoofTime() {
    const min = 5 * 60 * 1000;
    const max = 8 * 60 * 1000;
    const delay = Math.floor(Math.random() * (max - min) + min);
    console.log("⏱️ Tempo simulado:", (delay / 60000).toFixed(2), "min");
  }

  function clickMatchButton(regex) {
    const btn = [...document.querySelectorAll("button")].find(b => regex.test(b.textContent));
    if (btn) {
      btn.click();
      return true;
    }
    return false;
  }

  function selectCorrectOption() {
    const correct = [...document.querySelectorAll("label")].find(l => /correta|correct/i.test(l.textContent));
    const input = correct?.querySelector("input[type='radio']");
    if (input) {
      input.click();
      console.log("✅ Múltipla escolha selecionada.");
      return true;
    }
    return false;
  }

  function fillCorrectAnswer() {
    const input = document.querySelector("textarea, input[type='text']");
    const hint = document.querySelector('[data-test-id="hint-text"], .correct-answer');
    const text = hint?.textContent.match(/"(.*?)"/)?.[1];
    if (input && text) {
      input.value = text;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      console.log("✍️ Resposta preenchida:", text);
      return true;
    }
    return false;
  }

  function playVideoIfExists() {
    const video = document.querySelector("video");
    if (video && video.paused) {
      video.play().catch(() => {});
      console.log("🎬 Vídeo iniciado");
      return true;
    }
    return false;
  }

  function runBot() {
    try {
      if (clickMatchButton(/vamos lá|start|começar/i)) return spoofTime();
      if (playVideoIfExists()) return;
      if (selectCorrectOption()) return;
      if (fillCorrectAnswer()) return;
      if (clickMatchButton(/verificar|check answer/i)) return;
      setTimeout(() => {
        clickMatchButton(/próxima|next|recomenda/i) && spoofTime();
      }, 2000);
    } catch (err) {
      console.error("❌ Erro:", err);
    }
  }

  // Loop automático
  setInterval(() => {
    if (autoMode) runBot();
  }, speed);
})();

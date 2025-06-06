(() => {
  const menu = document.createElement("div");
  menu.className = "khanware-menu";
  menu.style = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #111;
    color: white;
    border-radius: 10px;
    padding: 15px;
    z-index: 9999;
    font-family: 'Arial', sans-serif;
    box-shadow: 0 0 10px #00ff88;
    width: 260px;
  `;

  menu.innerHTML = `
    <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Khanware</div>

    <button onclick="loadScript(repoPath+'functions/questionSpoof.js', 'Spoofar Questões')">✅ Spoofar Questões</button>
    <button onclick="loadScript(repoPath+'functions/autoAnswer.js', 'Auto Answer')">🤖 Auto Responder</button>
    <button onclick="loadScript(repoPath+'functions/videoSpoof.js', 'Spoofar Vídeo')">📺 Spoofar Vídeo</button>
    <button onclick="loadScript(repoPath+'functions/minuteFarmer.js', 'Farmar Minutos')">🧠 Farmar Minutos</button>
    <button onclick="loadScript(repoPath+'functions/answerRevealer.js', 'Mostrar Respostas')">💡 Mostrar Respostas</button>
    <button onclick="loadScript(repoPath+'functions/rgbLogo.js', 'RGB Logo')">🌈 RGB Logo</button>
    <button onclick="loadScript(repoPath+'functions/customBanner.js', 'Banner Customizado')">🖼️ Banner Custom</button>
    <button onclick="loadScript(repoPath+'functions/spoofUser.js', 'Spoof Usuário')">🕵️ Spoof Usuário</button>

    <hr style="margin: 10px 0; border-color: #00ff88;">

    <div style="margin-bottom: 5px;">🎵 Reprodutor de Música:</div>
    <input id="ytsearch" type="text" placeholder="Digite nome ou artista" style="width: 100%; padding: 4px; margin-bottom: 5px; border-radius: 4px; border: none;">
    <button onclick="(() => {
      const q = document.getElementById('ytsearch').value;
      document.getElementById('ytplayer').src = 'https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(q);
    })()" style="width: 100%; margin-bottom: 5px;">▶️ Tocar</button>
    <iframe id="ytplayer" width="100%" height="180" style="border: none; border-radius: 6px;" allowfullscreen></iframe>

    <div style="font-size:11px;margin-top:10px;opacity:0.5;">Developed by @luizsantasuzana</div>
  `;

  document.body.appendChild(menu);
})();

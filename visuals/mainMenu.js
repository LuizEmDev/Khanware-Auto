(() => {
  const menu = document.createElement("div");
  menu.className = "khanware-menu";
  menu.innerHTML = `
    <style>
      .khanware-menu {
        position: fixed;
        top: 70px;
        right: 20px;
        background: #111;
        color: white;
        border-radius: 10px;
        padding: 15px;
        z-index: 9999;
        font-family: 'Arial', sans-serif;
        box-shadow: 0 0 10px #00ff88;
      }
      .khanware-menu button {
        display: block;
        width: 100%;
        margin: 6px 0;
        padding: 6px;
        border: none;
        background: #00cc66;
        color: white;
        border-radius: 6px;
        cursor: pointer;
      }
    </style>
    <div><strong>Khanware</strong></div>
    <button onclick="loadScript(repoPath+'functions/minuteFarmer.js', 'minuteFarmer')">🧠 Farmar Minutos</button>
    <button onclick="loadScript(repoPath+'functions/questionSpoof.js', 'questionSpoof')">✅ Spoofar Questões</button>
    <button onclick="loadScript(repoPath+'functions/videoSpoof.js', 'videoSpoof')">📺 Spoofar Vídeo</button>
    <button onclick="loadScript(repoPath+'visuals/widgetBot.js', 'widgetBot')">🎵 Música</button>
    <div style="font-size:11px;margin-top:10px;opacity:0.5;">Developed by @luizsantasuzana</div>
  `;
  document.body.appendChild(menu);
})();

(() => {
  const menu = document.createElement("div");
  menu.style = `
    position:fixed;
    top:20px;
    right:20px;
    background:#111;
    padding:15px;
    color:white;
    border-radius:10px;
    z-index:9999;
    box-shadow:0 0 10px #00ff88;
  `;
  menu.innerHTML = `
    <div style="font-size:18px;margin-bottom:10px;color:#00ff88;">Khanware</div>
    <button onclick="(${farmMinutes.toString()})()" style="margin-bottom:10px;">🧠 Farmar Minutos</button><br>
    <button onclick="(${spoofQuestions.toString()})()" style="margin-bottom:10px;">✅ Spoofar Questões</button><br>
    <button onclick="(${spoofVideo.toString()})()" style="margin-bottom:10px;">📺 Spoofar Vídeo</button><br>
    <div style="font-size:11px;opacity:0.5;margin-top:10px;text-align:center;">Developed by @luizsantasuzana</div>
  `;
  document.body.appendChild(menu);
})();

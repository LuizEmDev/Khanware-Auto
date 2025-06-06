// Developed by @luizsantasuzana

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
    <h3 style="margin-top:0; color:#72ff72;">Khanware Menu</h3>
    <button onclick="window.location.reload()">🔁 Recarregar</button><br><br>
    <button onclick="farmMinutes()">🧠 Farmar Minutos</button><br><br>
    <button onclick="loadScript('./visuals/youtubePlayer.js','YouTube Player')">🎵 Abrir Música</button><br><br>
    <div style="font-size:12px;opacity:0.7;">Developed by @luizsantasuzana</div>
`;

document.body.appendChild(menu);

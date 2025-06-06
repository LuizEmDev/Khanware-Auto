(() => {
  const player = document.createElement("div");
  player.style = "position:fixed;bottom:20px;right:20px;width:300px;background:#000;padding:10px;border-radius:10px;z-index:9999;color:white;";
  player.innerHTML = `
    <input id="ytquery" placeholder="🎵 Buscar música" style="width:100%;padding:5px;"><br>
    <button onclick="(() => {
      const q = document.getElementById('ytquery').value;
      document.getElementById('ytiframe').src = 'https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(q);
    })()" style="width:100%;margin-top:5px;">▶️ Tocar</button>
    <iframe id="ytiframe" width="100%" height="200" style="margin-top:10px;" allowfullscreen></iframe>
  `;
  document.body.appendChild(player);
})();

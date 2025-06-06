(() => {
  const container = document.createElement("div");
  container.style = "position:fixed;bottom:10px;left:10px;background:#000;padding:10px;border-radius:10px;width:300px;z-index:9999;color:white;";
  container.innerHTML = `
    <input id="ytsearch" type="text" placeholder="🎵 Buscar música" style="width:100%;margin-bottom:8px;padding:4px;">
    <button onclick="(() => {
      const q = document.getElementById('ytsearch').value;
      document.getElementById('ytplayer').src = 'https://www.youtube.com/embed?listType=search&list=' + encodeURIComponent(q);
    })()" style="width:100%;padding:4px;">▶️ Tocar</button>
    <iframe id="ytplayer" width="100%" height="200" style="margin-top:10px;border:none;" allowfullscreen></iframe>
  `;
  document.body.appendChild(container);
})();

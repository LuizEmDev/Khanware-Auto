(() => {
  const panel = document.createElement("div");
  panel.style = "position:fixed;top:10px;left:10px;background:#111;color:white;padding:10px;border-radius:6px;font-size:13px;z-index:9999;box-shadow:0 0 8px #00ff88;";
  panel.textContent = `Khanware ${ver}`;
  document.body.appendChild(panel);
})();

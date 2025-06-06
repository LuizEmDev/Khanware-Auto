(() => {
  if (!window.features.rgbLogo) return;
  const logo = document.querySelector('img[alt="Khan Academy"]');
  let hue = 0;
  setInterval(() => {
    if (logo) logo.style.filter = `hue-rotate(${hue++}deg)`;
  }, 100);
})();

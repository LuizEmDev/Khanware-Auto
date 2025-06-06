(() => {
  if (!window.features.customBanner) return;
  const banner = document.querySelector('[data-test="progress-header"]');
  if (banner) {
    banner.style.background = "linear-gradient(to right, #00ff88, #0066ff)";
  }
})();

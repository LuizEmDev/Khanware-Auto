(() => {
  if (!window.features.autoAnswer) return;

  const delay = window.featureConfigs.autoAnswerDelay * 1000 || 3000;

  const auto = () => {
    const correct = document.querySelector('[data-test="correct-choice"]');
    if (correct) {
      setTimeout(() => {
        correct.click();
        sendToast("✅ Questão respondida automaticamente");
      }, delay);
    }
  };

  const observer = new MutationObserver(() => auto());
  observer.observe(document.body, { childList: true, subtree: true });
})();

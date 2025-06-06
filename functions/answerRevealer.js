(() => {
  if (!window.features.showAnswers) return;

  const highlightCorrect = () => {
    const correct = document.querySelector('[data-test="correct-choice"]');
    if (correct) {
      correct.style.border = "3px solid #00ff88";
    }
  };

  const observer = new MutationObserver(() => highlightCorrect());
  observer.observe(document.body, { childList: true, subtree: true });
})();

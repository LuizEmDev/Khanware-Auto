(() => {
  const minutes = Math.floor(Math.random() * 4) + 5;
  let count = 0;
  const interval = setInterval(() => {
    count++;
    Toastify({ text: `🕒 Minuto ${count}/${minutes}`, duration: 2000 }).showToast();
    if (count >= minutes) {
      clearInterval(interval);
      Toastify({ text: "✅ Farming completo!", duration: 3000 }).showToast();
    }
  }, 60000);
})();

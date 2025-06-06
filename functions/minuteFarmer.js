(() => {
  const minutes = Math.floor(Math.random() * 4) + 5;
  let count = 0;

  const interval = setInterval(() => {
    count++;
    Toastify({ text: `🧠 Minuto ${count}/${minutes}`, duration: 3000 }).showToast();

    if (typeof activityLog !== "undefined" && activityLog.log) {
      activityLog.log({
        action: "log_perseverance_minute",
        data: { source: "khanware" }
      });
    }

    if (count >= minutes) {
      clearInterval(interval);
      Toastify({ text: "✅ Farming concluído", duration: 3000 }).showToast();
    }
  }, 60000);
})();

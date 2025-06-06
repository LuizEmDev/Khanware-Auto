(() => {
  const video = document.querySelector("video");
  if (!video) return Toastify({ text: "❌ Nenhum vídeo encontrado", duration: 3000 }).showToast();

  video.currentTime = video.duration - 1;
  video.dispatchEvent(new Event("timeupdate"));
  video.dispatchEvent(new Event("ended"));
  video.dispatchEvent(new Event("complete"));
  Toastify({ text: "📺 Vídeo spoofado com sucesso", duration: 3000 }).showToast();
})();

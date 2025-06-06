// Developed by @luizsantasuzana
window.features.videoSpoof = true;

const video = document.querySelector('video');
if (video) {
    video.currentTime = video.duration - 1;
    video.dispatchEvent(new Event('timeupdate'));
    video.dispatchEvent(new Event('ended'));
    console.log("✅ Vídeo spoofed");
}

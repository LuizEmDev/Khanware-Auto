javascript
// mainMenu.js
function createMainMenu() {
const menu = document.createElement('div');
menu.id = 'custom-menu';
menu.innerHTML = `
Khan Academy Auto<button onclick="questionSpoof()">Spoof Questões<button onclick="videoSpoof()">Spoof Vídeo<button onclick="autoAnswer()">Auto Responder
<button onclick="playMusic()">Tocar
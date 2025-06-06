// Developed by @luizsantasuzana

const ytContainer = document.createElement('div');
ytContainer.style = `
  position: fixed;
  bottom: 10px;
  left: 10px;
  width: 300px;
  background: #222;
  color: white;
  padding: 10px;
  border-radius: 8px;
  z-index: 9999;
`;

ytContainer.innerHTML = `
  <input type="text" id="ytSearch" placeholder="🔍 Nome da música" style="width: 100%;"><br><br>
  <button onclick="searchYt()">Tocar</button>
  <div id="ytPlayer" style="margin-top:10px;"></div>
`;

function searchYt() {
  const term = document.getElementById('ytSearch').value.trim();
  if (!term) return;
  const url = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(term)}`;
  document.getElementById('ytPlayer').innerHTML = `<iframe width="100%" height="200" src="${url}" frameborder="0" allowfullscreen></iframe>`;
}

document.body.appendChild(ytContainer);

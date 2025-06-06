// Developed by @luizsantasuzana
window.features = window.features || {};
window.features.questionSpoof = true;

// Simples exemplo: força exibição de alternativas corretas
setInterval(() => {
    document.querySelectorAll('[data-test=correct-choice]').forEach(el => {
        el.style.border = '2px solid #00ff00';
    });
}, 1000);

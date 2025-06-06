// Developed by @luizsantasuzana
window.features.minuteFarmer = true;

function farmMinutes() {
    const min = Math.floor(Math.random() * 4) + 5; // entre 5 e 8
    let elapsed = 0;

    const interval = setInterval(() => {
        elapsed++;
        console.log(`🕒 Simulando minuto ${elapsed}/${min}`);
        if (elapsed >= min) {
            clearInterval(interval);
            alert("✅ Farming concluído!");
        }
    }, 60000); // 1 minuto real por loop
}

farmMinutes();

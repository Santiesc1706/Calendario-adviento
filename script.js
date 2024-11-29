document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const gifts = [
        "🎁 Chocolate", "🎄 Adorno", "🍬 Dulces", "🎶 Villancicos",
        "📖 Poema", "🎥 Película", "☕ Café", "🎅 Felicitación",
        "🕯️ Vela", "🍪 Galleta", "📸 Foto", "❄️ Nieve",
        "🧸 Muñeco", "🎨 Dibujo", "🍷 Vino", "🔔 Campana",
        "🍫 Chocolate grande", "🎬 Entrada al cine", "📚 Libro",
        "🍵 Té especial", "🏠 Decoración navideña", "💌 Carta",
        "🌟 Estrella", "🎊 Fiesta"
    ];

    const today = new Date();
    const currentDay = today.getDate(); // Día actual del mes

    for (let i = 1; i <= 24; i++) {
        const day = document.createElement("div");
        day.className = "day";
        day.innerHTML = `<span>${i}</span><div class="gift">${gifts[i - 1]}</div>`;
        day.dataset.day = i;

        // Verificar si el día es mayor que la fecha actual
        if (i > currentDay) {
            day.style.pointerEvents = "none";
            day.style.opacity = 0.5;
        }

        // Permitir solo el día actual para hacer clic y desbloquear
        if (i === currentDay) {
            day.style.pointerEvents = "auto";
        }

        day.addEventListener("click", () => {
            if (i <= currentDay) { // Solo permite hacer clic en los días que ya han pasado
                day.classList.add("unlocked");
            }
        });

        calendar.appendChild(day);
    }
});

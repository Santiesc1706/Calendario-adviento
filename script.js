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
    for (let i = 1; i <= 24; i++) {
        const day = document.createElement("div");
        day.className = "day";
        day.innerHTML = `<span>${i}</span><div class="gift">${gifts[i - 1]}</div>`;
        day.dataset.day = i;
        const today = new Date().getDate();
        if (i > today) {
            day.style.pointerEvents = "none";
            day.style.opacity = 0.5;
        }
        day.addEventListener("click", () => {
            day.classList.add("unlocked");
        });
        calendar.appendChild(day);
    }
});

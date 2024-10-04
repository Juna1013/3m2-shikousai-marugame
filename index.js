document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const ingredientsContent = document.getElementById('ingredients-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentItem = 0;

    // Countdown timer
    const eventDate = new Date('2024-10-26T08:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `開店まで: ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;

        if (distance < 0) {
            clearInterval(countdownTimer);
            countdownElement.innerHTML = "イベント開催中!";
        }
    }

    const countdownTimer = setInterval(updateCountdown, 1000);

    // Initialize Lucide icons
    lucide.createIcons();
});
document.addEventListener('DOMContentLoaded', () => {
    // 開店までのカウントダウン
    const countdownElement = document.getElementById('countdown');
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

    // カーソル
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentItem = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentItem = (currentItem - 1 + items.length) % items.length;
        showItem(currentItem);
    });

    nextBtn.addEventListener('click', () => {
        currentItem = (currentItem + 1) % items.length;
        showItem(currentItem);
    });

    showItem(currentItem);

    // Crepe steps animation
    const steps = document.querySelectorAll('#crepe-steps li');
    let currentStep = 0;

    function highlightStep() {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });
        currentStep = (currentStep + 1) % steps.length;
    }

    setInterval(highlightStep, 2000);
});
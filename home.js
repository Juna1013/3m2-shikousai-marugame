document.addEventListener('DOMContentLoaded', () => {
    // カウントダウンタイマー
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date('2024-10-26T08:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `開催まであと ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;

        if (distance < 0) {
            clearInterval(countdownTimer);
            countdownElement.innerHTML = "イベント開催中！";
        }
    }

    const countdownTimer = setInterval(updateCountdown, 1000);

    // クレープ作成ステップのアニメーション
    const steps = document.querySelectorAll('#crepe-steps li');
    let currentStep = 0;

    function highlightNextStep() {
        steps.forEach(step => step.classList.remove('active'));
        currentStep = (currentStep + 1) % steps.length;
        steps[currentStep].classList.add('active');
    }

    setInterval(highlightNextStep, 2000);

});
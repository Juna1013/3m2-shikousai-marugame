document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const ingredientsContent = document.getElementById('ingredients-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const ingredients = [
        { category: 'フルーツ', items: ['いちご', 'バナナ', '白桃', 'みかん', 'パイナップル'] },
        { category: 'トッピング', items: ['チョコソース', 'イチゴソース', 'カラースプレー', 'ホイップクリーム', 'アイスクリーム'] }
    ];

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

    // Ingredients carousel
    function renderIngredients() {
        ingredientsContent.innerHTML = ingredients.map((category, index) => `
            <div class="w-full flex-shrink-0">
                <h3 class="text-xl font-semibold mb-2">${category.category}</h3>
                <ul class="list-disc list-inside">
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    function showItem(index) {
        ingredientsContent.style.transform = `translateX(-${index * 100}%)`;
    }

    renderIngredients();

    prevBtn.addEventListener('click', () => {
        currentItem = (currentItem - 1 + ingredients.length) % ingredients.length;
        showItem(currentItem);
    });

    nextBtn.addEventListener('click', () => {
        currentItem = (currentItem + 1) % ingredients.length;
        showItem(currentItem);
    });

    // Initialize Lucide icons
    lucide.createIcons();
});

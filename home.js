document.addEventListener('DOMContentLoaded', () => {
 
    // Show the previous item in the carousel
    prevBtn.addEventListener('click', () => {
        currentItem = (currentItem - 1 + items.length) % items.length;
        showItem(currentItem);
    });

    // Show the next item in the carousel
    nextBtn.addEventListener('click', () => {
        currentItem = (currentItem + 1) % items.length;
        showItem(currentItem);
    });

    // Initialize the carousel with the first item
    showItem(currentItem);

});
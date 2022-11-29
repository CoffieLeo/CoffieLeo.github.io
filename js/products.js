// favorite-btn
let favoriteBtn = document.querySelectorAll('.product-item-info .favorite-btn');
if (favoriteBtn) {
    for (let i = 0; i < favoriteBtn.length; i += 1) {
        const elem = favoriteBtn[i];
        elem.addEventListener('click', () => {
            elem.classList.toggle("like-btn");
        });
    }
}
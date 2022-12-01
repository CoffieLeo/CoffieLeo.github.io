var swiper = new Swiper(".thumbs-swiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".detail-swiper", {
    thumbs: {
        swiper: swiper,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var swiper = new Swiper(".featured-swiper", {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
});

// favorite-btn
// favorite-btn
let favoriteBtn = document.querySelectorAll('.favorite-btn');
if (favoriteBtn) {
    for (let i = 0; i < favoriteBtn.length; i += 1) {
        const elem = favoriteBtn[i];
        elem.addEventListener('click', () => {
            elem.classList.toggle("like");
        });
    }
}
var swiper = new Swiper(".skin-ai-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
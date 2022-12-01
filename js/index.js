// banner swiper
const bannerSwiper = new Swiper('.swiper', {
    loop: true,
});

// pro swiper
const proSwiper = new Swiper(".pro-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
    },
    loop: true,
    // effect: "fade",
});

const proSwiperMobileOne = new Swiper(".pro-swiper-mobile1", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    breakpoints: {
        390: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1440: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1920: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    // initialSlide: 0,
});

const proSwiperMobileTwo = new Swiper(".pro-swiper-mobile2", {
    
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loopedSlides: 1,
    loop:true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1440: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1920: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
    controller:{
        control: proSwiperMobileOne,
        by: 'container',
    },
    // initialSlide: 1,
});

proSwiperMobileOne.controller.control = proSwiperMobileTwo;
proSwiperMobileTwo.controller.control = proSwiperMobileOne;


// meet swiper
const meetSwiper = new Swiper('.meet-swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
});

// accordion
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// footer accordion
var acc = document.getElementsByClassName("footer-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
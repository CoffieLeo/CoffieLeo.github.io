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

const proSwiperMobile = new Swiper(".pro-swiper-mobile", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    breakpoints: {
        390: {
            slidesPerView: 1.2,
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
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    // on: {
    //     slideChangeTransitionEnd: function () {
    //         if(this.activeIndex === 1) {
    //             document.querySelector('.swiper-box').classList.add('aaa');
    //         }
    //     },
    // },
});


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
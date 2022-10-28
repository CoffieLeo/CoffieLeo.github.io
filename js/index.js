// choiceLang
function choiceLang() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

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
    on: {
        slideChangeTransitionEnd: function () {
            if(this.activeIndex === 1) {
                document.querySelector('.swiper-box').classList.add('aaa');
            }
        },
    },
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

// sidebar
function openNav() {
    document.querySelector('.sidebar').classList.add('active')
}
  
function closeNav() {
    document.querySelector('.sidebar').classList.remove('active')
}
// hover navigation list
let list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

// chooseLang
function chooseLang() {
    document.getElementById("langDropdown").classList.toggle("active");
}

window.onclick = function(event) {
    if (!event.target.matches('.lang-btn')) {
        var dropdowns = document.getElementsByClassName("lang-box");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}

// mobile header menu
var swiper = new Swiper(".menuSwiper", {
    slidesPerView: 'auto',
    // spaceBetween: 30,
    // centeredSlides: true,
});

// get mobile menu position
// var mobileLists = document.querySelectorAll(".mobile-member-menu-slider .list"),
//     positions = [];

// Array.prototype.forEach.call(mobileLists, function (list) {
//     var positionInfo = list.getBoundingClientRect();

//     positions.push(Math.floor(positionInfo.left));
//     console.log("x:" + Math.floor(positionInfo.left));
// });

// let scrollElement = document.querySelector("#scroll-element");
// let test = document.querySelectorAll('.mobile-member-menu-slider .list');
// function changePosition(){
//     test.forEach(function(item, index){
//         scrollElement.scrollLeft +=  25;
//     })
//     console.log(positions);
// }
// test.forEach((item) => item.addEventListener('click', changePosition));


var swiper = new Swiper(".couponSwiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
        390: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

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
        1440: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// toggleCouponInfoBox
function openCouponInfoBox() {
    document.querySelector('.coupon-rule-fixed').classList.add('active')
}
  
function closeCouponInfoBox() {
    document.querySelector('.coupon-rule-fixed').classList.remove('active')
}

// star rating
const LABELCOLORINACTIV = "#DADADA";
const LABELCOLORACTIV = "#FFC700";

const RATINGSLABELS = document.querySelectorAll("form.star label");
const RATINGSINPUTS = document.querySelectorAll("form.star input");

// make inputs disappear
RATINGSINPUTS.forEach(function(anInput) {
  anInput.style.display = "none";
});

// manage label click & hover display
function notationLabels(e) {
  let currentLabelRed = e.target;
  let currentLabelBlack = e.target;
  
  // console.log(e.target.localName);
  
  if (e.type == "mouseenter" || !e.target.control.checked) {
    // coloring red from the clicked/hovered label included, going backward till the node start - if we are hovering or the star isn't already checked.
    while (currentLabelRed != null) {
      currentLabelRed.style.color = LABELCOLORACTIV;
      currentLabelRed = currentLabelRed.previousElementSibling;
    }

    // coloring black from the clicked/hovered label excluded, going forward till the node end
    while ((currentLabelBlack = currentLabelBlack.nextElementSibling) != null) {
      currentLabelBlack.style.color = LABELCOLORINACTIV;
    }
  } else {
    // if the clicked label was already checked we uncheck it and prevent the click event from doing its job - defacto enabling zero star rating
    e.target.control.checked = false;
    e.preventDefault();
  }
  
}

function notationLabelsOut(e) {
    let notesNode = e.target.parentNode.querySelectorAll("label");
    let currentLabel = notesNode[notesNode.length - 1];

    notesNode.forEach(function redrum(starLabel) {
        starLabel.style.color = LABELCOLORACTIV;
    });

    while (currentLabel != null && !currentLabel.control.checked) {
        currentLabel.style.color = LABELCOLORINACTIV;
        currentLabel = currentLabel.previousElementSibling;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    RATINGSLABELS.forEach(function(aStar) {
        aStar.style.color="#eee";
        aStar.addEventListener("click", notationLabels);
        aStar.addEventListener("mouseenter", notationLabels);
        aStar.addEventListener("mouseout", notationLabelsOut);
    });
    RATINGSINPUTS.forEach(function(aStarInput) {
        aStarInput.addEventListener("click", function(e) {
            e.stopPropagation();
        });
    });
});

// toggleReviewBox
function openReviewBox() {
    document.querySelector('.review-msg-box').classList.add('active')
}
  
function closeReviewBox() {
    document.querySelector('.review-msg-box').classList.remove('active')
}
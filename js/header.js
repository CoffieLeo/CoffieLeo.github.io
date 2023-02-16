// sidebar
function openNav() {
    document.querySelector('.sidebar').classList.add('active')
}
  
function closeNav() {
    document.querySelector('.sidebar').classList.remove('active')
}

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

// shopping cart
function openCart() {
    document.querySelector('.shopping-cart-box').classList.add('active')
}
  
function closeCart() {
    document.querySelector('.shopping-cart-box').classList.remove('active')
}


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(window).on('resize', function() {
    $('body').css('padding-top', $('header').outerHeight());
});

$(document).ready(function() {
    $('body').css('padding-top', $('header').outerHeight());
});
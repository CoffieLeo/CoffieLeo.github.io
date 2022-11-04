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
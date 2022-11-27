let box = document.querySelector('.shopping-pay-box');
document.body.style.paddingBottom = box.offsetHeight + 'px';
addEventListener('resize', (event) => {
    document.body.style.paddingBottom = box.offsetHeight + 'px';
});

// toggleFreeBox
function openFreeBox() {
    document.querySelector('.choose-free-fixed').classList.add('active')
}
  
function closeFreeBox() {
    document.querySelector('.choose-free-fixed').classList.remove('active')
}

// toggleCouponBox
function openCouponBox() {
    document.querySelector('.choose-coupon-fixed').classList.add('active')
}
  
function closeCouponBox() {
    document.querySelector('.choose-coupon-fixed').classList.remove('active')
}

// toggleAddressBox
function openAddressBox() {
    document.querySelector('.choose-address-fixed').classList.add('active')
}
  
function closeAddressBox() {
    document.querySelector('.choose-address-fixed').classList.remove('active')
}

// toggleCouponInfoBox
function openCouponInfoBox() {
    document.querySelector('.coupon-rule-fixed').classList.add('active')
}
  
function closeCouponInfoBox() {
    document.querySelector('.coupon-rule-fixed').classList.remove('active')
}
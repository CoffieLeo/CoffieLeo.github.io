let box = document.querySelector('.shopping-pay-box');
document.body.style.paddingBottom = box.offsetHeight + 'px';
addEventListener('resize', (event) => {
    document.body.style.paddingBottom = box.offsetHeight + 'px';
});
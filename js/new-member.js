// favorite-btn
let target = document.querySelectorAll('.step-2 li');
if (target) {
    for (let i = 0; i < target.length; i += 1) {
        const elem = target[i];
        elem.addEventListener('click', () => {
            elem.classList.toggle("is-choose");
        });
    }
}
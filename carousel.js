const carousel = document.querySelector('.grid-carousel');
const slides = carousel.querySelectorAll('.grid-carousel_item');
const leftButton = carousel.querySelector('.js-left');
const rightButton = carousel.querySelector('.js-right');

const getOrder = (elem) => {
    const styles = getComputedStyle(elem);
    const orderVal = styles.order;
    const order = parseInt(orderVal);

    return order;
}

const moveRight = _ => {
    slides.forEach(function(slide) {
        order = getOrder(slide);

        if (order < slides.length) {
            slide.style.order = order += 1;
        } else {
            slide.style.order = 1;
        }
    });
}

const moveLeft = _ => {
    slides.forEach(function(slide) {
        order = getOrder(slide);

        if (order > 1) {
            slide.style.order = order -= 1;
        } else {
            slide.style.order = 5;
        }
    });
}

rightButton.addEventListener('click', _ => {
    moveRight();
});

leftButton.addEventListener('click', _ => {
    moveLeft();
});

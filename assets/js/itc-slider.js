let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.discount__items');
const items = document.querySelectorAll('.discount__card');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemWidth = container.clientWidth / slidesToShow;
const itemCount = items.length;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
    item.style.marginRight = `8px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtn();
});
btnPrev.addEventListener('click', () => {
    const itemsRight = Math.abs(position) / itemWidth;

    position += itemsRight >= slidesToScroll ? movePosition : itemsRight * itemWidth;

    setPosition();
    checkBtn();
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}

const checkBtn = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
}
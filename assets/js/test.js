let position = 0;
const slidesToShow = 3;
const slidesToScroll = 3;
const container = document.querySelector('.slider-container2');
const track = document.querySelector('.comment__items');
const items = document.querySelectorAll('.comment__item');
const btnPrev = document.querySelector('.btn-prev2');
const btnNext = document.querySelector('.btn-next2');
const itemWidth = container.clientWidth / slidesToShow;
const itemCount = items.length;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const Left = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= Left >= slidesToScroll ? movePosition : Left * itemWidth;

    setPosition();
    checkBtn();
});
btnPrev.addEventListener('click', () => {
    const Right = Math.abs(position) / itemWidth;

    position += Right >= slidesToScroll ? movePosition : Right * itemWidth;

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
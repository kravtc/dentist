const service_item_div = document.querySelectorAll('.service__item');

service_item_div.forEach(item=>{

    const show_more = item.querySelector('.service__showMore');

    show_more.onclick = function (event){
        event.preventDefault();
        openPrice(item)
    }
});

function openPrice(target){
    target.querySelector('.service__open').classList.toggle('open');
    target.querySelector('.service__close').classList.toggle('close');
}
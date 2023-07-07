const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navbar_items = $$('.navbar__item');
const overViewDots = $$('.overView__pagination-item');
const overViewValues = $$('.numbers-item__values');

navbar_items.forEach((item) => {
    item.addEventListener('click', () => {
        toggleActiveNav(item);
    });
});

function toggleActiveNav(ele) {
    $('.navbar__item.active').classList.remove('active');
    ele.classList.add('active');
}

overViewDots.forEach((item, index) => {
    item.addEventListener('click', () => {
        toggleActiveOverView(item, index);
    });
});
overViewValues.forEach((item, index) => {
    item.addEventListener('click', () => {
        toggleActiveOverView(item, index);
    });
});

function toggleActiveOverView(ele, index) {
    $('.overView__pagination-item.active').classList.remove('active');
    $('.numbers-item__values.active').classList.remove('active');
    ele.classList.add('active');
    overViewValues[index].classList.add('active');
    overViewDots[index].classList.add('active');
}

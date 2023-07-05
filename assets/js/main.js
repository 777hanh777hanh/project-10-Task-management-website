const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navbar_items = $$('.navbar__item');

navbar_items.forEach((item) => {
    item.addEventListener('click', () => {
        toggleActiveNav(item);
    });
});

function toggleActiveNav(ele) {
    $('.navbar__item.active').classList.remove('active');
    ele.classList.add('active');
}

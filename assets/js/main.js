const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Copy navbar from PC to Tablet/Mobile
$('.menu__drawer').innerHTML = $('.navbar .navbar__list').innerHTML;

const navbar_items = $$('.navbar .navbar__item');
const menu__items = $$('.menu__drawer .navbar__item');
const overViewDots = $$('.overView__pagination-item');
const overViewValues = $$('.numbers-item__values');

navbar_items.forEach((item, index) => {
    item.addEventListener('click', () => {
        toggleActiveNav(index);
    });
});

menu__items.forEach((item, index) => {
    item.addEventListener('click', () => {
        toggleActiveNav(index);
    });
});

function toggleActiveNav(index) {
    $('.navbar .navbar__item.active').classList.remove('active');
    $('.menu__drawer .navbar__item.active').classList.remove('active');
    navbar_items[index].classList.add('active');
    menu__items[index].classList.add('active');
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

// start -----  navigate of testimonials //

const testimonials = document.querySelectorAll('.testimonial__item');
const prevButtonTestimonial = document.querySelectorAll('.testimonial__chevron--left');
const nextButtonTestimonial = document.querySelectorAll('.testimonial__chevron--right');

// Get gap of testimonialBlock

// handle
const range = Math.ceil(testimonials.length);
let currentRange = 1;
const testimonialBlock = document.querySelector('.testimonial__block');
handleButtonPrev();
handleButtonNext();
function handlePrevTestimonial() {
    const testimonialBlockColumnGap = window.getComputedStyle(testimonialBlock).columnGap.replace('px', '');
    if (currentRange > 1) {
        nextButtonTestimonial.forEach((btn) => btn.classList.remove('disabled'));
        currentRange -= 1;
        testimonials.forEach((testimonial) => {
            testimonial.style.transform = `translateX(calc(${100 * -(currentRange - 1)}% + ${
                testimonialBlockColumnGap * -(currentRange - 1)
            }px))`;
        });
    }
    handleButtonPrev();
}
function handleNextTestimonial() {
    const testimonialBlockColumnGap = window.getComputedStyle(testimonialBlock).columnGap.replace('px', '');
    prevButtonTestimonial.forEach((btn) => btn.classList.remove('disabled'));
    if (currentRange < testimonials.length) {
        testimonials.forEach((testimonial) => {
            testimonial.style.transform = `translateX(calc(-${100 * currentRange}% - ${
                testimonialBlockColumnGap * currentRange
            }px))`;
        });
        currentRange += 1;
    }
    handleButtonNext();
}

function handleButtonPrev() {
    if (currentRange === 1) {
        prevButtonTestimonial.forEach((btn) => btn.classList.add('disabled'));
        prevButtonTestimonial.forEach((btn) => btn.addEventListener('click', (e) => e.preventDefault()));
    }
}
function handleButtonNext() {
    if (currentRange === testimonials.length) {
        nextButtonTestimonial.forEach((btn) => btn.classList.add('disabled'));
        nextButtonTestimonial.forEach((btn) => btn.addEventListener('click', (e) => e.preventDefault()));
    }
}

prevButtonTestimonial.forEach((btn) => btn.addEventListener('click', handlePrevTestimonial));
nextButtonTestimonial.forEach((btn) => btn.addEventListener('click', handleNextTestimonial));

window.onresize = () => {
    const testimonialBlockColumnGap = window.getComputedStyle(testimonialBlock).columnGap.replace('px', '');
    testimonials.forEach((testimonial) => {
        testimonial.style.transform = `translateX(calc(${100 * -(currentRange - 1)}% + ${
            testimonialBlockColumnGap * -(currentRange - 1)
        }px))`;
    });
};

// end -----  navigate of testimonials //

// Copy content footer from PC to Mobile

$('.footer__menu-drawer').innerHTML = $('.footer__content').innerHTML;

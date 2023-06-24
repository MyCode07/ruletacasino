import { Swiper, Autoplay } from "swiper";

const casinoSlider = document.querySelector('.casino-slider .swiper');
const casinoSliderSlides = document.querySelectorAll('.casino-slider .swiper .swiper-slide');

if (casinoSliderSlides.length) {
    new Swiper(casinoSlider, {
        modules: [Autoplay],
        loop: true,
        slidesPerView: 'auto',
        autoplay: {

        },
        breakpoints: {
            300: {
                spaceBetween: 15,
                centeredSlides: true,
            },
            600: {
                spaceBetween: 20,
                centeredSlides: false,
            }
        }
    })
}
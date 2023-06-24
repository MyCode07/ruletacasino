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


const rouletteSlider = document.querySelector('.roulette-slider .swiper');
const rouletteSliderSlides = document.querySelectorAll('.roulette-slider .swiper .swiper-slide');

if (rouletteSliderSlides.length) {
    new Swiper(rouletteSlider, {
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


const darkSlider = document.querySelector('.dark-slider .swiper');
const darkSliderSlides = document.querySelectorAll('.dark-slider .swiper .swiper-slide');

if (darkSliderSlides.length) {
    new Swiper(darkSlider, {
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

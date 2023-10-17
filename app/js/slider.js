import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'


const swiper = new Swiper('.collection-points-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        // when window width is >= 320px
        320: {

            slidesPerView: 'auto',
            spaceBetween: 30,

        },

    }
});
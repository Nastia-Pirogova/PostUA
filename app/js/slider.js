
const swiper = new Swiper('.collection-points-slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    // freeMode: true,
    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    },


    breakpoints: {
        // when window width is >= 320px
        320: {

            slidesPerView: 'auto',
            spaceBetween: 30,

        },
        768: {
            slidesPerView: 2.3,
        },
       1240: {
            slidesPerView: 3.5,
        },
    }
});
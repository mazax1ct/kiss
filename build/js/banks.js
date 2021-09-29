const banks = new Swiper('.js-banks', {
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    spaceBetween: 50,
    slidesPerView: 'auto',
    speed: 5000,
    breakpoints: {
        1200: {
            spaceBetween: 110
        },
        1900: {
            spaceBetween: 185
        }
    }
});

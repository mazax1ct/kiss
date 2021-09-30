const portraits = new Swiper('.js-portraits', {
    loop: true,
    loopedSlides: 3,
    loopAdditionalSlides: 3,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 1500,
    slidesPerView: 'auto',
    centeredSlides: true,
    breakpoints: {
        1200: {
            navigation: {
                nextEl: '.js-portraits .slider-next',
                prevEl: '.js-portraits .slider-prev',
            },
            allowTouchMove: false
        }
    }
});

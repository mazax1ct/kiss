const results = new Swiper('.js-results', {
    loop: true,
    /*autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },*/
    speed: 1500,
    slidesPerView: 1,
    pagination: {
        el: '.js-results .swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.js-results .slider-next',
        prevEl: '.js-results .slider-prev',
    },
    breakpoints: {
        768: {
            allowTouchMove: false,
            pagination: false,
        }
    }
});

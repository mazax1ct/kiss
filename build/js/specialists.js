const specialists = new Swiper('.js-specialists', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 1500,
    slidesPerView: 1,
    pagination: {
        el: '.js-specialists .swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.js-specialists .slider-next',
        prevEl: '.js-specialists .slider-prev',
    },
    breakpoints: {
        768: {
            allowTouchMove: false,
            pagination: false,
        }
    }
});

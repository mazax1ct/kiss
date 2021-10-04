const reviews = new Swiper('.js-reviews', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 500,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.js-reviews .swiper-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        1200: {
            pagination: false,
            navigation: {
                nextEl: '.js-reviews .slider-next',
                prevEl: '.js-reviews .slider-prev',
            },
            allowTouchMove: false
        }
    }
});

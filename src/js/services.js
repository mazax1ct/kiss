const services = new Swiper('.js-services', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 1500,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.js-services .swiper-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        1200: {
            pagination: false,
            navigation: {
                nextEl: '.js-services .slider-next',
                prevEl: '.js-services .slider-prev',
            },
            allowTouchMove: false
        }
    }
});

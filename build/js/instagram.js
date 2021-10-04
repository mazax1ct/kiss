const instagram = new Swiper('.js-instagram', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 500,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.js-instagram .swiper-pagination',
        dynamicBullets: true,
    },
    breakpoints: {
        1200: {
            pagination: false,
            navigation: {
                nextEl: '.js-instagram .slider-next',
                prevEl: '.js-instagram .slider-prev',
            },
            allowTouchMove: false
        }
    }
});

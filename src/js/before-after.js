$(document).ready(function() {

  setTimeout( function() {
    $(".js-before-after").twentytwenty({
        before_label: '',
        after_label: '',
        no_overlay: true
    });
  }, 500);

  if($('.js-before-after-slider').length) {
    $('.js-before-after-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
      draggable: false,
      arrows: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg><use xlink:href="#arrow_left"></use></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперёд"><svg><use xlink:href="#arrow_right"></use></svg></button>',
      infinite: false,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }
});

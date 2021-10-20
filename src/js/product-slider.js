$(document).ready(function() {
  if($('.js-product-slider').length) {
    $('.js-product-slider').slick({
      autoplay: true,
      speed: 1000,
      infinite: true,
      mobileFirst: true,
      prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg><use xlink:href="#arrow_left"></use></svg></button>',
      nextArrow: '<button class="slick-next" type="button" title="Вперёд"><svg><use xlink:href="#arrow_right"></use></svg></button>'
    });
  }
});

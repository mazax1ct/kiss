$(document).ready(function() {
  if($('.js-reviews').length) {
    $('.js-reviews').slick({
      autoplay: true,
      arrows: false,
      infinite: true,
      mobileFirst: true,
      centerMode: true,
      centerPadding: '10%',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: true,
            prevArrow: '<button class="slick-prev" type="button" title="Назад"><svg><use xlink:href="#arrow_left"></use></svg></button>',
            nextArrow: '<button class="slick-next" type="button" title="Вперёд"><svg><use xlink:href="#arrow_right"></use></svg></button>'
          }
        }
      ]
    });
  }
});

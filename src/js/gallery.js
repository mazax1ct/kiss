$(document).ready(function() {
  if($('.js-gallery').length) {
    $('.js-gallery').slick({
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

$(document).on('click', '.gallery-switches__switch', function () {
  $('.gallery-switches__switch').removeClass('is-active');
  $(this).addClass('is-active');

  $('.gallery__tab').removeClass('is-active');
  $('.gallery__tab[data-target="'+ $(this).attr('data-target') +'"]').addClass('is-active');
  
  $('.gallery__tab:visible').find('.js-gallery').slick('setPosition');

  return false;
});

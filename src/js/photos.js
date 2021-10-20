$(document).ready(function() {
  if($('.js-photos').length) {
    $('.js-photos').slick({
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

var filtered = false;

$(document).on('click', '.js-filter', function () {
  $('.js-filter').removeClass('is-active');
  $(this).addClass('is-active');

  var filter = $(this).data('filter');

  if(filter == 'all') {
    $('.js-filtered-slider').slick('slickUnfilter');
    filtered = false;
  } else {
    $('.js-filtered-slider').slick('slickUnfilter').slick('slickFilter','[data-filter="'+filter+'"]');
    filtered = true;
  }
});

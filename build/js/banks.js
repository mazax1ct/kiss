$(document).ready(function() {
  if($('.js-banks').length) {
    $('.js-banks').slick({
      autoplay: true,
      arrows: false,
      infinite: true,
      mobileFirst: true,
      centerMode: true,
      variableWidth: true
    });
  }
});

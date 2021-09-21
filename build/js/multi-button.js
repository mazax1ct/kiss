$(document).on('click', '.js-multi-button-toggler', function () {
  var _this = $(this);
  _this.toggleClass('is-active');

  if(_this.hasClass('is-active')) {
    _this.find('use').attr('xlink:href', '#close');
    $('.multi-button__list').addClass('is-active');
    setTimeout(function (){
      $('.multi-button__list').addClass('animate');
    },300);
  } else {
    _this.find('use').attr('xlink:href', '#phone');
    $('.multi-button__list').removeClass('animate');
    setTimeout(function (){
      $('.multi-button__list').removeClass('is-active');
    },300);
  }
  return false;
});

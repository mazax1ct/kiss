$(document).on('click', '.js-multi-button-toggler', function () {
  var _this = $(this);
  _this.toggleClass('is-active');

  if(_this.hasClass('is-active')) {
    _this.find('use').attr('xlink:href', '#close');
    $('.multi-button__list').slideDown();
  } else {
    _this.find('use').attr('xlink:href', '#phone');
    $('.multi-button__list').slideUp();
  }
  return fasle;
});

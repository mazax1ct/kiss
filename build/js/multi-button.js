$(document).on('click', '.js-multi-button-toggler', function () {
  var _this = $(this);
  _this.toggleClass('is-active');

  if(_this.hasClass('is-active')) {
    _this.find('use').attr('xlink:href', '#close');
    _this.next('.multi-button__list').addClass('is-active');
    setTimeout(function (){
      _this.next('.multi-button__list').addClass('animate');
    },100);
  } else {
    _this.find('use').attr('xlink:href', '#phone');
    _this.next('.multi-button__list').removeClass('animate');
    setTimeout(function (){
      _this.next('.multi-button__list').removeClass('is-active');
    },100);
  }
  return false;
});

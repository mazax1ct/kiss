//открытие/закрытие меню
$(document).on('click', '.js-footer-menu-toggler', function () {
  $('.footer__menu').slideToggle();

  var _this = $(this);
  _this.toggleClass('is-active');

  if(_this.hasClass('is-active')) {
    _this.find('use').attr('xlink:href', '#close');
    _this.find('span').text('Скрыть меню');
    $('.footer__menu').slideDown();
  } else {
    _this.find('use').attr('xlink:href', '#burger');
    _this.find('span').text('Показать меню');
    $('.footer__menu').slideUp();
  }
  return false;
});

$(document).on('click', '.js-spec-about-toggler', function () {
  var _this = $(this);

  _this.toggleClass('is-active');

  if(_this.hasClass('is-active')) {
    _this.text('Скрыть подробности');
  } else {
    _this.text('Смотреть всё');
  }

  $('.spec-about__dropdown').slideToggle();
  return false;
});

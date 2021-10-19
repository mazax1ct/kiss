$(document).on('click', '.js-bonus', function () {
  $(this).find('.bonus__dropdown').slideToggle();
  $(this).toggleClass('is-active');
  return false;
});

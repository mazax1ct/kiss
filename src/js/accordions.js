$(document).on('click', '.js-accordion', function () {
  $(this).find('.accordion__dropdown').slideToggle();
  $(this).toggleClass('is-active');
  return false;
});

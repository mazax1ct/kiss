$(document).on('click', '.js-tabs-nav', function () {
  $(this).closest('.tabs').find('.js-tabs-nav').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-target="'+$(this).attr("data-target")+'"]').addClass('is-active');
  return false;
});

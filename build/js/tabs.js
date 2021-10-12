$(document).on('click', '.tabs-nav__button', function () {
  $(this).closest('.tabs').find('.tabs-nav__button').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-target="'+$(this).attr("data-target")+'"]').addClass('is-active');
  return false;
});

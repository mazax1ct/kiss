$(document).on('mouseenter focus', '.calc__jaws-scheme svg path', function () {
  $('.calc__jaw-tooth[data-id="'+$(this).attr("data-id")+'"]').addClass('hover');
});

$(document).on('mouseleave blur', '.calc__jaws-scheme svg path', function () {
  $('.calc__jaw-tooth[data-id="'+$(this).attr("data-id")+'"]').removeClass('hover');
});

$(document).on('click', '.calc__jaws-scheme svg path', function () {
  $('.calc__jaws-scheme svg path').removeClass('is-active');
  $('.calc__jaw-tooth').removeClass('is-active');

  $('.calc__jaw-tooth[data-id="'+$(this).attr("data-id")+'"]').addClass('is-active');
});

$(document).on('mouseenter focus', '.calc__jaw-tooth', function () {
  $('.calc__jaws-scheme svg path[data-id="'+$(this).attr("data-id")+'"]').addClass('hover');
});

$(document).on('mouseleave blur', '.calc__jaw-tooth', function () {
  $('.calc__jaws-scheme svg path[data-id="'+$(this).attr("data-id")+'"]').removeClass('hover');
});

$(document).on('click', '.calc__jaw-tooth', function () {
  $('.calc__jaws-scheme svg path').removeClass('is-active');
  $('.calc__jaw-tooth').removeClass('is-active');

  $('.calc__jaws-scheme svg path[data-id="'+$(this).attr("data-id")+'"]').addClass('is-active');
});

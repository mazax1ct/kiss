$(document).ready(function() {
  $('.input-label .input').each(function () {
    if($(this).val() !== '') {
      $(this).parent('.input-label').addClass('changed');
    }
  });
});

$(document).on('focus', '.input-label .input', function() {
  $(this).parent('.input-label').addClass('changed');
});

$(document).on('blur', '.input-label .input', function() {
  if($(this).val() === '') {
    $(this).parent('.input-label').removeClass('changed');
  }
});

$(document).ready(function() {
  //кастомный селект
	$('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper__container');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     placeholder: $(this).attr('placeholder')
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.removeClass('open');
	});

  //инпуты
  $('.input-label .input').each(function () {
    if($(this).val() !== '') {
      $(this).parent('.input-label').addClass('changed');
    }
  });
});

//инпуты
$(document).on('focus', '.input-label .input', function() {
  $(this).parent('.input-label').addClass('changed');
});

//инпуты
$(document).on('blur', '.input-label .input', function() {
  if($(this).val() === '') {
    $(this).parent('.input-label').removeClass('changed');
  }
});

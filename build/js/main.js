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

//флип-флап
$(document).on('click', '.flip-flap__front', function () {
	$(this).closest('.flip-flap').toggleClass('is-flipped');
});

//скролл по якорю
$(document).on('click', '.js-scroll-to', function () {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top - 20;
	$('body,html').animate({scrollTop: top}, 1000);
});

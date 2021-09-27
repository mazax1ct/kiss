var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();

  if ( scrolled > $('.header').height() ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});

//открытие/закрытие меню
$(document).on('click', '.js-menu-toggler', function () {

  return false;
});

//открытие/закрытие поиска
$(document).on('click', '.js-search-toggler', function () {
	var _this = $(this);
  _this.toggleClass('is-active');

  if(_this.hasClass('is-active')) {
    _this.find('use').attr('xlink:href', '#close');
		$('.header__search-form').addClass('is-active');
    $('.header__search-input').focus();
		setTimeout(function () {
      $('.header__search-form').addClass('animate');
    },100);
  } else {
		_this.find('use').attr('xlink:href', '#search');
		$('.header__search-form').removeClass('animate');
		setTimeout(function (){
			$('.header__search-input').blur();
      $('.header__search-form').removeClass('is-active');
    },100);
  }
  return false;
});

//ввод текста в поле поиска
$(document).on('input', '.header__search-input', function () {
	if($(this).val().length > 0) {
		$('.header__search-input-clear').prop('disabled', '');
		$('.header__search-submit').prop('disabled', '');
	}else{
		$('.header__search-input-clear').prop('disabled', 'disabled');
		$('.header__search-submit').prop('disabled', 'disabled');
	}
});

//очистка поля ввода
$(document).on('click', '.header__search-input-clear', function () {
	$('.header__search-input').val('');
	$('.header__search-input-clear').prop('disabled', 'disabled');
	$('.header__search-submit').prop('disabled', 'disabled');
	$('.header__search-input').focus();
	return false;
});

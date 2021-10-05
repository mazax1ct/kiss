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

//открытие/закрытие мобильного меню
$(document).on('click', '.js-mobile-menu-toggler', function () {
	var _this = $(this);
  _this.toggleClass('is-active');

	if(_this.hasClass('is-active')) {
    _this.find('use').attr('xlink:href', '#close');
		$('body').addClass('menu-open');
		$('.header__menu-block').addClass('is-active');
		setTimeout(function () {
      $('.header__menu-block').addClass('animate');
    },100);
  } else {
		_this.find('use').attr('xlink:href', '#burger');
		$('.header__menu-block').removeClass('animate');
		setTimeout(function () {
      $('.header__menu-block').removeClass('is-active');
			$('body').removeClass('menu-open');
			$('body').removeClass('submenu-open');
    },100);
  }
  return false;
});

//открытие/закрытие меню
$(document).on('click', '.js-menu-toggler', function () {
	var _this = $(this);
  _this.toggleClass('is-active');

	if(_this.hasClass('is-active')) {
		if($('body').width() > 1023) {
			_this.find('use').attr('xlink:href', '#close');
			if(!$('body').hasClass('compensate-for-scrollbar')) {
		    scrollCompensate();
		  }
			$('.js-lvl3menu-opener[data-target="1"]').addClass('is-active');
			$('.submenu__submenu-block[data-target="1"]').addClass('is-active');
		}

		$('body').addClass('submenu-open');

		$('.header__menu-block-inner').addClass('submenu-open');

		$('.submenu').addClass('is-active');
  } else {
		if($('body').width() > 1023) {
			_this.find('use').attr('xlink:href', '#menu');
			$('body').removeClass('compensate-for-scrollbar');
			$('#scroll-compensate').remove();
		}

		$('.header__menu-block-inner').removeClass('submenu-open');
		$('.submenu').removeClass('is-active');
		$('body').removeClass('submenu-open');

  }
  return false;
});

$(document).on('click', '.js-submenu-closer', function () {
	$('.js-menu-toggler').removeClass('is-active');
	$('.js-menu-toggler').find('use').attr('xlink:href', '#menu');
	$('.header__menu-block-inner').removeClass('submenu-open');
	$('.submenu').removeClass('is-active');
	$('body').removeClass('submenu-open');
	$('body').removeClass('compensate-for-scrollbar');
	if($('#scroll-compensate').length) {
		$('#scroll-compensate').remove();
	}
	return false;
});

//закрытие меню второго уровня (мобила)
$(document).on('click', '.js-submenu-closer', function () {
	$('.header__menu-toggler').removeClass('is-active');
	$('.header__menu-block-inner').removeClass('submenu-open');
	$('.submenu').removeClass('is-active');
	return false;
});

//открытие меню 3 уровня (мобила)
$(document).on('click', '.js-lvl3menu-opener', function () {
	$('.js-lvl3menu-opener').removeClass('is-active');
	$(this).addClass('is-active');
	$('.submenu__submenu-block').removeClass('is-active');
	$('.submenu__submenu-block[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
	return false;
});

//закрытие меню 3 уровня (мобила)
$(document).on('click', '.js-lvl3menu-closer', function () {
	$('.submenu__submenu-block').removeClass('is-active');
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
		setTimeout(function () {
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

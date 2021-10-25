var lastFocusedElement; //переменная для последнего элемента в фокусе перед открытием поповера
var firstTabStop, lastTabStop; //переменные для первого и последнего элемента в фокусе в открытом попапе
var popupMapShow = false;


//обработчик для работы с клавиатуры
function keyboardUse(e) {
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }

  if(e.keyCode === 27) {
    popoverClose();
  }
}

function popoverOpen(el) {
  lastFocusedElement = document.activeElement;

  //если уже открыт поповер
  if($('body').hasClass('popup-open')) {
    $('.popup.is-open').fadeOut(300, function() {
      $('.popup.is-open').removeClass('is-open');
    });
  }

  $('body').addClass('popup-open');
  $('.popups-shade').fadeIn(300, function() {
    $('.popups-shade').addClass('is-open');
    $('#' + el).fadeIn(300, function() {
      $('#' + el).addClass('is-open');
      var popover = $('.popup.is-open');

      //ловим все интерактивные элементы в поповере
      var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

      var focusableElements = popover.find(focusableElementsString);

      //собираем массив
      focusableElements = Array.prototype.slice.call(focusableElements);

      //выбираем первый элемент массива
      firstTabStop = focusableElements[0];

      //выбираем последний элемент массива
      lastTabStop = focusableElements[focusableElements.length - 1];

      //фокусируемся на первом
      firstTabStop.focus();

      //вешаем события на кнопки
      document.addEventListener('keydown', keyboardUse);
    });
  });
}

function popoverClose() {
  $('.popup.is-open').removeClass('is-open');
  setTimeout(function () {
    $('.popups-shade').fadeOut(300, function() {
      $('.popups-shade').removeClass('is-open');
      $('body').removeClass('popup-open');
      if(!$('body').hasClass('submenu-open')) {
        $('body').removeClass('compensate-for-scrollbar');
        $('#scroll-compensate').remove();
      }
      document.removeEventListener('keydown', keyboardUse);
      lastFocusedElement.focus();
    });
  },300);
}

//открытие поповера
$(document).on('click', '.js-popup-opener', function () {
  if(!$('body').hasClass('compensate-for-scrollbar')) {
    scrollCompensate();
  }
  $('body').addClass('popup-open');
  popoverOpen($(this).attr('data-popup'));

  if($(this).attr('data-popup') == 'map-popup') {
    if(popupMapShow != true) {
      var elem = document.createElement('script');
      elem.type = 'text/javascript';
      elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&load=package.full&lang=ru_RU';

      var container = document.getElementById('popup_map');
      container.appendChild(elem);
      popupMapShow = true;

      setTimeout( function() {
        mapInit(container);
      }, 3000);
    }
  }

  return false;
});

//закрытие поповера
$(document).on('click', '.js-popup-closer', function () {
  popoverClose();
  return false;
});

//закрытие поповера по клику на шейд
$(document).on('click', '.popups-shade', function (evt) {
  if($(this).is(evt.target)) {
    popoverClose();
    //return false;
  }
});

//яндекс карты
var footerMap;
var locations = [
  [59.929096, 30.340329, 'Kiss'],
];

var mapShowed = false;

function init() {
  footerMap = new ymaps.Map('footer_map', {
    center: [59.929096, 30.340329],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

  footerMap.behaviors.disable('scrollZoom');

  var i, placemark;

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      hintContent: locations[i][2]
    }, {
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'images/icons/map-pin.svg',
      // Размеры метки.
      iconImageSize: [40, 40],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-20, -20]
    });

    footerMap.geoObjects.add(placemark);
  }

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    footerMap.behaviors.disable('drag');
    footerMap.behaviors.enable('MultiTouch');
  }
}

window.onload = () => {
  // настройки
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  }

  // функция обратного вызова
  let callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && mapShowed != true) {
        var elem = document.createElement('script');
        elem.type = 'text/javascript';
        elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
        document.getElementById('footer_map').appendChild(elem);

        mapShowed = true;
      }
    })
  }

  // наблюдатель
  let observer = new IntersectionObserver(callback, options);

  //цель наблюдения
  let target = document.getElementById('footer_map');
  observer.observe(target);
}

/*setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('footer_map').appendChild(elem);
}, 2000);*/

//яндекс карты
var locations = [
  [59.929096, 30.340329, 'Kiss'],
];

var mapShowed = false;

function mapInit(elem) {
  var map = new ymaps.Map(elem, {
    center: [59.929096, 30.340329],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

  map.behaviors.disable('scrollZoom');

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

    map.geoObjects.add(placemark);
  }

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    map.behaviors.disable('drag');
    map.behaviors.enable('MultiTouch');
  }
}

window.onload = () => {
  //цель наблюдения
  let target = document.getElementById('footer_map');

  if(target) {
    // настройки
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }

    // функция обратного вызова
    let callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting > 0) {
          if(mapShowed != true) {
            var elem = document.createElement('script');
            elem.type = 'text/javascript';
            elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&load=package.full&lang=ru_RU';

            var container = document.getElementById('footer_map');
            container.appendChild(elem);
            mapShowed = true;

          	setTimeout( function() {
              mapInit(container);
            }, 3000);
          }
        }
      })
    }

    // наблюдатель
    let observer = new IntersectionObserver(callback, options);

    observer.observe(target);
  }
}

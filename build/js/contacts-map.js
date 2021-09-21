//яндекс карты
var contactsMap;
var locations = [
  [60.033538, 30.414386, 'VSignal'],
];

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('contacts_map').appendChild(elem);
}, 1000);


function init() {
  contactsMap = new ymaps.Map('contacts_map', {
    center: [60.033538, 30.414386],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

  contactsMap.behaviors.disable('scrollZoom');

  var i, placemark;

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      hintContent: locations[i][2]
    }, {

    });

    contactsMap.geoObjects.add(placemark);
  }

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    contactsMap.behaviors.disable('drag');
    contactsMap.behaviors.enable('MultiTouch');
  }
}

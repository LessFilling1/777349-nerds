var modalbg = document.querySelector('#modal-write-us-bg');
var modal = document.querySelector('#modal-write-us');
var closeButton = document.querySelector('#button-close');
var openButton = document.querySelector('#button-open');

closeButton.addEventListener('click', function () {
  modalbg.classList.toggle('closed');
  modal.classList.toggle('closed');
});

modalbg.addEventListener('click', function () {
  modalbg.classList.toggle('closed');
  modal.classList.toggle('closed');
});

openButton.addEventListener('click', function () {
  modalbg.classList.toggle('closed');
  modal.classList.toggle('closed');

  var name = document.querySelector('#user-name');
  var email = document.querySelector('#user-email');
  var text = document.querySelector('#message-text');
  var buttonSend = document.querySelector('#button-send');

  buttonSend.addEventListener('click', function () {
    name.classList.add('validator');
    email.classList.add('validator');
    text.classList.add('validator');
  });
});


ymaps.ready(function () {
  var myMap = new ymaps.Map('map-iframe', {
          center: [59.938891, 30.323155],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          balloonContent: 'Наш офис'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/map-marker.png',
          // Размеры метки.
          iconImageSize: [370, 190],
          // Смещение левого верхнего угла иконки относительно
          // её 'ножки' (точки привязки).
          iconImageOffset: [-185, -190]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
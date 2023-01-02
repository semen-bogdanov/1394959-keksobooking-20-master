  const title = document.querySelector(`#title`); // Заголовок объявления
  const address = document.querySelector(`#address`); // Адрес
  const min__string = document.querySelectorAll(`.min__string`); //  input адрес, заголовок объявления, цена за ночь
  const form__submit = document.querySelector('.form__submit') // Опубликовать 
  const notice__form = document.querySelector('.notice__form');
  const type_prixe = document.querySelector('#type'); // выбор жилья
  const nighte__price = document.querySelector('.nighte__price'); // input цена за ночь
  const room_number = document.querySelector(`#room_number`); // количество комнат
  const capacity = document.querySelector(`#capacity`); // количество гостей
  const capacity__option = document.querySelectorAll(`.capacity__option`); // массив option Количество мест
  const min__string2 = document.querySelector(`.min__string2`); // Описание (не обязательно)
  const foto__avatar = document.querySelector(`.foto__avatar`); // Фото аватарка, которую загрузил пользователь
  const foto__avatar2 = document.querySelector(`.foto__avatar2`); // Фото жилья

  const timein_spisok = document.querySelector(`#timein`); // Время заезда select
  const timeout_spisok = document.querySelector(`#timeout`); // Время выезда select
  const testimonials__review1 = document.querySelector('.map__card2'); // блок (div) где находяться все сообщения

  const feature1 = document.querySelectorAll(`.feature1`); // Удобства (wi-fi, кухня, парковка)
  const feature3 = document.querySelectorAll(`.feature3`); // Удобства (wi-fi, кухня, парковка)

  // template для дублирования
  const taskTemplate = document.querySelector('#template'); // template для дублирования
  const newItemTemplateName = taskTemplate.content.querySelector('.header__name'); // заголовок внутри template
  const newItemTemplateAdress = taskTemplate.content.querySelector('.header__adress'); // адрес внутри template
  const newItemTemplatePrice = taskTemplate.content.querySelector('.popup__price2'); // цена внутри template
  const newItemTemplate = taskTemplate.content.querySelectorAll('.template__out');
  const newItemTemplate2 = taskTemplate.content.querySelector('.template__out2');
  const newItemTemplateHome = taskTemplate.content.querySelector('.home__name'); // выбор жилья внутри template
  const time__name1 = taskTemplate.content.querySelector('.time__name1'); // время заезда внутри template
  const time__name2 = taskTemplate.content.querySelector('.time__name2'); // время выезда внутри template
  const home__rooms = taskTemplate.content.querySelector('.home__rooms'); // комнаты внутри template
  const home__rooms2 = taskTemplate.content.querySelector('.home__rooms2'); // гостей внутри template
  const feature = taskTemplate.content.querySelectorAll('.feature2'); // удобства внутри template
  const popup__avatar = taskTemplate.content.querySelector('.popup__avatar'); // фото аватарки

  const popup__pictures = taskTemplate.content.querySelector('.popup__pictures'); // фото комнат ul список

  // template для дублирования ПОХОЖИЙ
  const taskTemplatePO = document.querySelector('#template'); // template для дублирования
  const newItemTemplateNamePO = taskTemplate.content.querySelector('.header__name'); // заголовок внутри template
  const newItemTemplateAdressPO = taskTemplate.content.querySelector('.header__adress'); // адрес внутри template
  const newItemTemplatePricePO = taskTemplate.content.querySelector('.popup__price2'); // цена внутри template
  const newItemTemplatePO = taskTemplate.content.querySelectorAll('.template__out');
  const newItemTemplate2PO = taskTemplate.content.querySelector('.template__out2');
  const newItemTemplateHomePO = taskTemplate.content.querySelector('.home__name'); // выбор жилья внутри template
  const time__name1PO = taskTemplate.content.querySelector('.time__name1'); // время заезда внутри template
  const time__name2PO = taskTemplate.content.querySelector('.time__name2'); // время выезда внутри template
  const home__roomsPO = taskTemplate.content.querySelector('.home__rooms'); // комнаты внутри template
  const home__rooms2PO = taskTemplate.content.querySelector('.home__rooms2'); // гостей внутри template
  const featurePO = taskTemplate.content.querySelectorAll('.feature2'); // удобства внутри template
  const testimonials__review2 = document.querySelector('.map__card3'); // блок (div) где находяться похожие сообщения
  const pohog = document.querySelector('.pohog'); // надпись похожее объявление

  // TODO:  Валидация input

  min__string.forEach((element, item, arr) => {
      element.addEventListener('input', function (evt) { // отслеживаем событие в input с именем
          let target = evt.target; // записали событие, которое там произошло
          const input = element;
          if (target.value.length < 30 && element === arr[0] && element !== arr[1] && element !== arr[2] && input.value.length < 30) { // если длина событий в инпуте меньше двух, то событие выдаёт соответствующее сообщение 
              target.setCustomValidity('Заголовок должен состоять минимум из 30-ти символов');
              formAddError(input);
          } else if (target.value.length < 4 && element === arr[1] && element !== arr[0] && element !== arr[2] && input.value.length < 4) { // если длина событий в инпуте меньше двух, то событие выдаёт соответствующее сообщение 
              target.setCustomValidity('Адрес должен состоять минимум из 4-х символов');
              formAddError(input);
          } else if (target.value.length < 4 && element === arr[3] && element !== arr[0] && element !== arr[1] && input.value.length < 4) { // если длина событий в инпуте меньше двух, то событие выдаёт соответствующее сообщение 
              if (element === arr[3] && target.value == 0) { // запретить использовать первую цифру 0
                  target.value = "";
              }
              target.setCustomValidity('Цена должна состоять минимум из 4-х цифр');
              formAddError(input);
          } else { // в противном случаи проблем нет
              target.setCustomValidity('');
              formRemoveError(input);
          }
      });
  });


  // TODO:  Проверка Валидация. Незаполненные input. Только пустые строки и если всё заполнено по нужным требованиям то выдаём -3 в submit, чтобы вышла надпись "всё заполнено"
  const formValidate = () => {
      let error = 0; // счётчик
      let formReg = document.querySelectorAll('.min__string'); // поля input
      formReg.forEach((element, item, arr) => {
          const input = element;
          if (input.value === '') {
              console.log(input);
              formAddError(input);
              error++
          } else {
              formRemoveError(input);
              error--
          }
      })
      return error
  };


  // функция для вывода ошибки т.е. красной рамки
  const formAddError = (input) => {
      input.classList.add('testimonials__error');
      input.classList.remove('testimonials__not_error');
  };

  // функция для снятия ошибки т.е. убераеться красная рамка
  const formRemoveError = (input) => {
      input.classList.remove('testimonials__error');
      input.classList.add('testimonials__not_error');
  };

  // Цена за ночь
  type_prixe.onchange = function () {
      if (type_prixe.value === `Квартира`) {
          nighte__price.placeholder = "1 000";
          console.log(type_prixe.value);
      } else if (type_prixe.value === `Лачуга`) {
          nighte__price.placeholder = "0";
          console.log(type_prixe.value);
      } else if (type_prixe.value === `Дом`) {
          nighte__price.placeholder = "5 000";
          console.log(type_prixe.value);
      } else if (type_prixe.value === `Дворец`) {
          nighte__price.placeholder = "10 000";
          console.log(type_prixe.value);
      }
  };

  // функция перебора option 
  const Select_option1 = (arg, arg2 = false, arg3 = false) => { // функция перебора option «Количество мест»
      capacity__option.forEach((element, item, arr) => { // массив option Количество мест
          element.disabled = true;
          if (arr[item].value === arg) {
              arr[item].disabled = false;
          }
          if (arr[item].value === arg2) {
              arr[item].disabled = false;
          }
          if (arr[item].value === arg3) {
              arr[item].disabled = false;
          }
      })
  };

  // «Количество комнат» синхронизировано с полем «Количество мест»

  // По умолчанию с самого начала 1 комната - 1 место
  if (room_number.value === `1`) { // 1 комнаты
      capacity.value = `1`;
      Select_option1(`1`); // 1 место
  }

  room_number.onchange = function () {
      if (room_number.value === `1 комната`) { // 1 комнаты
          capacity.value = `для 1 гостя`;
          Select_option1(`для 1 гостя`); // 1 место
      } else if (room_number.value === `2 комнаты`) { // 2 комнаты
          capacity.value = `для 1 гостя`;
          Select_option1(`для 1 гостя`, `для 2 гостей`); // 2 места
      } else if (room_number.value === `3 комнаты`) { // 3 комнаты
          capacity.value = `для 1 гостя`;
          Select_option1(`для 1 гостя`, `для 2 гостей`, `для 3 гостей`); // 3 места
      } else if (room_number.value === `100 комнат`) { // 100 комнат
          capacity.value = `не для гостей`; // не для гостей
          Select_option1(`не для гостей`); // не для гостей
      }
  };

  // Синхранизация времени заезда и выезда
  const Select_spisok = (arg, arg2) => {
      arg.onchange = function () {
          if (arg.value === "12:00") { // если 12:00 (время заезда), выезд до 12 часов 
              arg2.value = `12:00`;
          }
          if (arg.value === "13:00") { // если 13:00 (время заезда), выезд до 13 часов 
              arg2.value = `13:00`;
          }
          if (arg.value === "14:00") { // если 14:00 (время заезда), выезд до 14 часов 
              arg2.value = `14:00`;
          }
      }
  };

  Select_spisok(timein_spisok, timeout_spisok);
  Select_spisok(timeout_spisok, timein_spisok);

  // Перебор удобства 
  feature3.forEach((element, item, arr) => {
      element.addEventListener("click", function () {
          (feature[item].style.opacity === "1") ? feature[item].style.opacity = "0.4": feature[item].style.opacity = "1"; // тернарный оператор (https://htmlacademy.ru/blog/boost/frontend/ternary-operator)
      });
  });


  // Похожий дом
  let similarHouse = [{
          capacity: `1 комната`, // количество комнат
          nighte__price: 1000, // цена за ночь
          type_prixe: `Лачуга`,
      },
      {
          capacity: `2 комнаты`,
          nighte__price: 5000,
          type_prixe: `Квартира`,
      },
      {
          capacity: `3 комнаты`,
          nighte__price: 10000,
          type_prixe: `Дом`,
      },
      {
          capacity: `50 комнат`,
          nighte__price: 50000,
          type_prixe: `Дворец`,
      },
      {
          capacity: `100 комнат`,
          nighte__price: 100000,
          type_prixe: `Дворец`,
      }
  ];



  notice__form.addEventListener('submit', function (evt) { // инициализируем submit для отправки form на сервер
      evt.preventDefault();
      // TODO: функция проверяет на ошибки и проверяет функционал полученных значений
      async function formSend() { // проверяет на ошибки заполнение формы
          let error = formValidate();
          console.log(formValidate());
          if (error === -8) { // проверка на ошибки. Если все 3 input заполнены, то значение должно быть -3 (т.е. true)
              alert('Всё заполнено');
              // Заголовок объявления, Адрес объявления, Цена за ночь
              min__string.forEach((element, item, arr) => {
                  let taskText = element.value;
                  newItemTemplate[item].textContent = taskText;
              });

              if (min__string2.value !== ``) { // Описание (не обязательно)
                  let taskText2 = min__string2.value;
                  newItemTemplate2.textContent = taskText2;
              }
              let taskText3 = foto__avatar.src;
              popup__avatar.src = taskText3;

              // Загрузка фото помещения
              let Foto__sostav = document.createElement('li');
              let Foto__img = document.createElement('img');
              Foto__sostav.appendChild(Foto__img).className = 'popup__pictures2';
              popup__pictures.appendChild(Foto__sostav);

              let taskText4 = foto__avatar2.src;
              Foto__img.src = taskText4;

              let FullContent = taskTemplate.content.cloneNode(true); // Дубликат узла
              testimonials__review1.append(FullContent); // В блок (div) где находяться все сообщения выводим измененный дубликат узла


              // Похожий

              similarHouse.forEach((element, item, arr) => {
                  let price = Number(newItemTemplate[3].textContent);
                  if (price >= 0 && price <= 4999) { // если цена за ночь от 1000 до 5000 то..
                      newItemTemplatePricePO.textContent = arr[0].nighte__price;
                      newItemTemplatePO[2].textContent = arr[0].type_prixe;
                      home__roomsPO.textContent = arr[0].capacity;
                  } else if (price >= 5000 && price <= 8000) { // если цена за ночь от 5000 до 8000 то..
                      newItemTemplatePricePO.textContent = arr[1].nighte__price;
                      newItemTemplatePO[2].textContent = arr[1].type_prixe;
                      home__roomsPO.textContent = arr[1].capacity;
                  } else if (price >= 8000 && price <= 11999) { // если цена за ночь  от 8000 до 11999
                      newItemTemplatePricePO.textContent = arr[2].nighte__price;
                      newItemTemplatePO[2].textContent = arr[2].type_prixe;
                      home__roomsPO.textContent = arr[2].capacity;
                  } else if (price >= 12000 && price <= 100000) { // если цена за ночь от 12000 до 100000
                      newItemTemplatePricePO.textContent = arr[3].nighte__price;
                      newItemTemplatePO[2].textContent = arr[3].type_prixe;
                      home__roomsPO.textContent = arr[3].capacity;
                  } else if (price >= 100000 && price <= 1000000) { // если цена за ночь от 100000 до 1000000
                      newItemTemplatePricePO.textContent = arr[4].nighte__price;
                      newItemTemplatePO[2].textContent = arr[4].type_prixe;
                      home__roomsPO.textContent = arr[4].capacity;
                  }
              });

              let SimilarContent = taskTemplatePO.content.cloneNode(true); // Дубликат узла
              testimonials__review2.append(SimilarContent); // В блок (div) где находяться все сообщения выводим измененный дубликат узла
              pohog.style.display = "flex"; // показать надпись похожее объявление
          } else {
              alert('Заполните обязательные поля');
          }
      }
      formSend();
  });
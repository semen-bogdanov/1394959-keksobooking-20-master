const addressOut = document.querySelector(`#address`); // Поле для ввода адреса
// Адреса и координаты на карте, которые можно выбрать пользователю при перетаскивании метки
let homeADDRESS_obj = [{
        addressHome: "Токио, ул. Розы Бронштейн дом 20А",
        coordinates_MAP_X_Left: 1565,
        coordinates_MAP_X_Right: 1624,
        coordinates_MAP_Y_Top: 335,
        coordinates_MAP_Y_Bottom: 493,
    },
    {
        addressHome: "Токио, ул. Довлатова дом 23",
        coordinates_MAP_X_Left: 570,
        coordinates_MAP_X_Right: 650,
        coordinates_MAP_Y_Top: 271,
        coordinates_MAP_Y_Bottom: 431,
    },
    {
        addressHome: "Токио, ул. Красная сосна дом 5",
        coordinates_MAP_X_Left: 646,
        coordinates_MAP_X_Right: 720,
        coordinates_MAP_Y_Top: 213,
        coordinates_MAP_Y_Bottom: 308,
    },
    {
        addressHome: "Токио, ул. Зелёного дракона дом 2",
        coordinat_MAP_X_Left: 697,
        coordinat_MAP_X_Right: 668,
        coordinat_MAP_Y_Top: 687,
        coordinat_MAP_Y_Bottom: 703,
    },
    {
        addressHome: "Токио, ул. Сильной стрекозы дом 54",
        coordinates_MAP_X_Left: 561,
        coordinates_MAP_X_Right: 606,
        coordinates_MAP_Y_Top: 137,
        coordinates_MAP_Y_Bottom: 261,
    }
];

// Записываеться выбранный адрес
let Address_OUT = [{
    selected_address: ``
}];


(function () {
    const map__pin__main = document.querySelector(`.map__pin--main`); // указатель адреса (перетаскивание метки),
    const map = document.querySelector(`.map`); // карта
    const notice__form = document.querySelector(`.notice__form`); // форма для заполнения. Изначально не активна

    map__pin__main.addEventListener(`mousedown`, function (evt) {
        evt.preventDefault();
        map.classList.remove(`map--faded`); // При перетаскивания метки убираеться класс "map--faded" который показывает активное окно карты
        notice__form.classList.remove(`notice__form--disabled`); //  При перетаскивания метки убираеться класс "notice__form--disabled" который показывает активное окно формы (заполнение объявления)
        // Запомнили координаты точек с которых мы начали перемещать диалог
        let startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        let onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            let shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };
            // Ограничения по перетаскивания метки внутри карты 
            if (startCoords.x > 491 && startCoords.x < 1630 && startCoords.y > 115 && startCoords.y < 635) {
                map__pin__main.style.top = (map__pin__main.offsetTop - shift.y) + `px`;
                map__pin__main.style.left = (map__pin__main.offsetLeft - shift.x) + `px`;
            }

            homeADDRESS_obj.forEach((element, item, arr) => {
                if (startCoords.x > element.coordinates_MAP_X_Left && startCoords.x < element.coordinates_MAP_X_Right && startCoords.y > element.coordinates_MAP_Y_Top && startCoords.y < element.coordinates_MAP_Y_Bottom) {
                    Address_OUT.selected_address = element.addressHome;
                    addressOut.value = Address_OUT.selected_address;
                }
            });
        };
        let onMouseUp = function (upEvt) {
            upEvt.preventDefault();
            document.removeEventListener(`mousemove`, onMouseMove);
            document.removeEventListener(`mouseup`, onMouseMove);
        };
        document.addEventListener(`mousemove`, onMouseMove);
        document.addEventListener(`mouseup`, onMouseUp);
    });

})();
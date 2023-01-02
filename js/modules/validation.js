// Валидация
const title = document.querySelector(`#title`); // поле input "Заголовок объявления"
const form__submit = document.querySelector('.form__submit') // Опубликовать 


title.addEventListener('input', function (evt) { // отслеживаем событие в input с именем
    let target = evt.target; // записали событие, которое там произошло
    if (target.value.length < 2 && target.value.length == 1) { // если длина событий в инпуте меньше двух, то событие выдаёт соответствующее сообщение 
        target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
        console.log(target.value.length);
    } else if (target.value.trim().length === 0 || target.value === null || target.value === undefined && target.value.length == 0) { // если длина событий в инпуте меньше двух, то событие выдаёт соответствующее сообщение 
        target.setCustomValidity('Обязательное поле для заполнения');
        console.log(target.value.length);
    } else { // в противном случаи проблем нет
        target.setCustomValidity('');
    }
});


form__submit.addEventListener('submit', function (evt) {
    evt.preventDefault();
    async function formSend() { // проверяет на ошибки заполнение формы
        let error2 = validation.formValidate(form__submit);
        if (error2 === 0) { // проверка на ошибки




        } else {
            alert('Заполните обязательные поля');
        }
    }
    formSend();
});




// title.addEventListener('invalid', function (evt) { // вешаем проверку ошибок. Отслеживаем валидацию
//     if (title.validity.tooShort) { // проверка на меньше одного символа ввели. Выдаст надпись пользователю по этой проблеме
//         title.setCustomValidity('Имя должно состоять минимум из 2-х символов');
//     } else if (title.validity.tooLong) { // проверка на длинное имя. Не больше 25 символов
//         title.setCustomValidity('Имя не должно превышать 25-ти символов');
//     } else if (title.validity.valueMissing) { // обязательное поле
//         title.setCustomValidity('Обязательное поле');
//     } else {
//         title.setCustomValidity(''); // в противном случаи всё без ошибок
//     }
// });
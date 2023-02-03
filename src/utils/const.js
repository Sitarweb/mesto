import baikal from '../images/Baikal.jpg';
import shark from '../images/Shark.jpg';
import tokyo from '../images/Tokyo.jpg';
import astronaut from '../images/Astronaut.jpg';
import jarrad from '../images/Jarrad.jpg';
import basketball from '../images/Basketball.jpg';


/** Настройки валидации **/
const setting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveButtonClass: 'form__button-save_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
}
/** Начальные карточки **/
const initialCards = [
    {
        name: 'Байкал',
        link: baikal
    },
    {
        name: 'Акула',
        link: shark
    },
    {
        name: 'Токио',
        link: tokyo
    },
    {
        name: 'Космонавт',
        link: astronaut
    },
    {
        name: 'Джаррад Энтони Хиггинс',
        link: jarrad
    },
    {
        name: 'Баскетбольный холл',
        link: basketball
    }
];
/** Объект хранит валидаторы форм  **/
const validators = {}

export {setting, initialCards, validators};
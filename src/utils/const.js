/** Настройки валидации **/
const setting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveButtonClass: 'form__button-save_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
}

/** Объект хранит валидаторы форм  **/
const validators = {}

export {setting, validators};
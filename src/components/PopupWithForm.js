import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(selector, formSubmit){
        super(selector);
        this._formSubmit = formSubmit;

        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
        this._submitButton = this._form.querySelector('.form__button-save');
    }
    /** Метод собирает данные с полей формы */
    _getInputValues(){
        this._inputValues = {};
        this._inputList.forEach((input) => {this._inputValues[input.name] = input.value;});

        return this._inputValues;
    }
    /** Метод отменяет стандартное поведение браузера, запускает колбэк функцию */
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();

            // перед запросом сохраняем изначальный текст кнопки
            const initialText = this._submitButton.textContent;

            // меняем его, чтобы показать пользователю ожидание
            this._submitButton.textContent = 'Сохранение...';

            this._formSubmit(this._getInputValues())
            .then(() => this.close()) // закрывается попап в `then`
            .finally(() => {
                this._submitButton.textContent = initialText;
            }); // в любом случае меняется текст кнопки обратно на начальный в `finally`
        });
    }
    /** Метод закрывает попап, также чистит форму */
    close(){
        super.close();
        this._form.reset();
    }
    /** Метод переносит данные со страницы в попап редактирования профиля или обнавления аватара */
    setInputValues(data){
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }
}
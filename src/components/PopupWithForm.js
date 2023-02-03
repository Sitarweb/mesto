import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(selector, formSubmit){
        super(selector);
        this._formSubmit = formSubmit;

        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
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
            this._formSubmit(this._getInputValues());
        });
    }
    /** Метод закрывает попап, также чистит форму */
    close(){
        super.close();
        this._form.reset();
    }
}
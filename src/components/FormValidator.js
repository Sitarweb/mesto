export default class FormValidator{
    constructor(setting, formElement){
        this._setting = setting;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._setting.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._setting.inputSelector));
    }
    /** Метод показывает элемент ошибки, показывает сообщение об ошибке */
    _showInputError(inputElement, errorMessage){
        inputElement.classList.add(this._setting.inputErrorClass);
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.add(this._setting.errorClass);
        errorElement.textContent = errorMessage;
    }
    /** Метод скрывает элемент ошибки, убирает сообщение об ошибке */
    _hideInputError(inputElement){
        inputElement.classList.remove(this._setting.inputErrorClass);
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(this._setting.errorClass);
        errorElement.textContent = '';
    }
    /** Метод проверяет валидность поля, вызывает showInputError или hideInputError */
    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid){
            this._showInputError(inputElement, inputElement.validationMessage);
        }else{
            this._hideInputError(inputElement);
        }
    }
    /** Метод добавляет всем полям формы слушатели, вызывает checkInputValidity и toggleButton */
    _setEventListeners(){
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButton();
            });
        });
    }
    /** Метод принимает массив полей формы и возвращает true, если в нём хотя бы одно поле не валидно, и false, если все валидны */
    _hasInvalidInput(){
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          });
    }
    /** Метод вызывает hasInvalidInput, true - кнопка блокируется, false - наоборот */
    _toggleButton(){
        if (this._hasInvalidInput()){
            this._buttonElement.classList.add(this._setting.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', '');
          }else {
              this._buttonElement.classList.remove(this._setting.inactiveButtonClass);
              this._buttonElement.removeAttribute('disabled', '');
          }
    }
    /** Метод во всех формах удаляет ошибки валидации при их открытии */
    resetValidation(){
        this._toggleButton();

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }
    /** Метод вызывает toggleButton и setEventListeners */
    enableValidation() {
        this._toggleButton();
        this._setEventListeners();
    }
}
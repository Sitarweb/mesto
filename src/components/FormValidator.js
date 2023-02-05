export default class FormValidator{
    constructor(setting, formElement){
        this._setting = setting;
        this._formElement = formElement;
        this._buttonElement = this._formElement.querySelector(this._setting.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._setting.inputSelector));
    }
    
    _showInputError(inputElement, errorMessage){
        inputElement.classList.add(this._setting.inputErrorClass);
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.add(this._setting.errorClass);
        errorElement.textContent = errorMessage;
    }
    
    _hideInputError(inputElement){
        inputElement.classList.remove(this._setting.inputErrorClass);
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.classList.remove(this._setting.errorClass);
        errorElement.textContent = '';
    }
    
    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid){
            this._showInputError(inputElement, inputElement.validationMessage);
        }else{
            this._hideInputError(inputElement);
        }
    }
    
    _setEventListeners(){
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButton();
            });
        });
    }
    
    _hasInvalidInput(){
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          });
    }
    
    _toggleButton(){
        if (this._hasInvalidInput()){
            this._buttonElement.classList.add(this._setting.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', '');
          }else {
              this._buttonElement.classList.remove(this._setting.inactiveButtonClass);
              this._buttonElement.removeAttribute('disabled', '');
          }
    }
    
    resetValidation(){
        this._toggleButton();

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }
    
    enableValidation() {
        this._toggleButton();
        this._setEventListeners();
    }
}
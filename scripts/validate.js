const selector = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveButtonClass: 'form__button-save_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
}  

function showInputError(formElement, inputElement, errorMessage){
    inputElement.classList.add(`${selector.inputErrorClass}`);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(`${selector.errorClass}`);
    errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement){
    inputElement.classList.remove(`${selector.inputErrorClass}`);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(`${selector.errorClass}`);
    errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement){
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }else{
        hideInputError(formElement, inputElement);
    }
}

function setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll(`${selector.inputSelector}`));
    const buttonElement = formElement.querySelector(`${selector.submitButtonSelector}`);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) =>{
        inputElement.addEventListener('input', () =>{
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

function hasInvalidInput (inputList){
    return inputList.some( (inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
function toggleButtonState (inputList, buttonElement){
    if (hasInvalidInput(inputList)){
      buttonElement.classList.add(`${selector.inactiveButtonClass}`);
      buttonElement.setAttribute('disabled', '');
    }else {
        buttonElement.classList.remove(`${selector.inactiveButtonClass}`);
        buttonElement.removeAttribute('disabled', '');
    }
  }

function enableValidation(selector){
    const formList = Array.from(document.querySelectorAll(`${selector.formSelector}`));
    formList.forEach((formElement) =>{
        formElement.addEventListener('submit', (evt) =>{
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
}

enableValidation(selector);
const selector = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveButtonClass: 'form__button-save_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
}  

function showInputError(formElement, inputElement, errorMessage,  {inputErrorClass, errorClass, ...rest}){
    inputElement.classList.add(inputErrorClass);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement, {inputErrorClass, errorClass, ...rest}){
    inputElement.classList.remove(inputErrorClass);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}

function checkInputValidity (formElement, inputElement, rest){
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage, rest);
    }else{
        hideInputError(formElement, inputElement, rest);
    }
}

function setEventListeners(formElement, {inputSelector, submitButtonSelector, ...rest}){
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, rest);
    inputList.forEach((inputElement) =>{
        inputElement.addEventListener('input', () =>{
            checkInputValidity(formElement, inputElement, rest);
            toggleButtonState(inputList, buttonElement, rest);
        });
    });
}

function hasInvalidInput (inputList){
    return inputList.some( (inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
function toggleButtonState (inputList, buttonElement, {inactiveButtonClass, ...rest}){
    if (hasInvalidInput(inputList)){
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', '');
    }else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled', '');
    }
  }

function enableValidation({formSelector, ...rest}){
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) =>{
        setEventListeners(formElement, rest);
    });
}

enableValidation(selector);
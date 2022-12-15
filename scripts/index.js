import {formList, profilePopup, profileEditing, profileOpenButton, profileName, profileJob, profileFormName, profileFormJob, 
    cardPopup, cardCreate, cardOpenButton, cardsConteiner, cardFormName, cardFormLink,
    imagePopup, popupElementImage, popupElementsubtitle, 
    closeButtons} from './elements.js';
import Card from './Card.js';
import formValidator from './FormValidator.js';
import {setting, initialCards, validator} from './const.js';

/** ф-и открытия и закрытия попапа, закрытия по esc **/
import {openPopup, closePopup} from "./popup.js";

/** закрытие при клике на закрывающею кнопку, по оверлею **/
import closePopupByOverlay from "./popup.js";

closeButtons.forEach((button) =>{
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
    popup.addEventListener('click', closePopupByOverlay);
});

/** Profile popup / Попап редактирования профиля **/

profileOpenButton.addEventListener('click', () => {
    openPopup(profilePopup);
    profileFormName.value = profileName.textContent;
    profileFormJob.value = profileJob.textContent;
});

function saveProfileForm (evt){
    evt.preventDefault();
    profileName.textContent = profileFormName.value;
    profileJob.textContent = profileFormJob.value;
    closePopup(profilePopup);
}
profileEditing.addEventListener('submit', saveProfileForm);

/** Cards popup / Попап добавления карточки **/
cardOpenButton.addEventListener('click', () => openPopup(cardPopup));

function createCard(data, template, increaseImage){
    return new Card(data, template, increaseImage).generateCard();
}

initialCards.forEach((data) => cardsConteiner.prepend(createCard(data, '#elements-template', increaseImage)));

function handleCardFormSubmit (evt){
    evt.preventDefault();
    
    const cardValue = {name: cardFormName.value, link: cardFormLink.value};
    cardsConteiner.prepend(createCard(cardValue, '#elements-template', increaseImage));
    evt.target.reset();

    validators['card-form'].setSubmitButtonState();
    closePopup(cardPopup);
}
cardCreate.addEventListener('submit', handleCardFormSubmit);

/** ф-я увеличения картинки **/
function increaseImage (imageElement, nameElement){
    openPopup(imagePopup);
    popupElementImage.src = imageElement;
    popupElementImage.alt = imageElement;
    popupElementsubtitle.textContent = nameElement;
}

/** валидация форм **/
const validators = {}
formList.forEach((formElement) => {
    const validator = new formValidator(setting, formElement);
    validator.enableValidation();
    validators[formElement.name] = validator;
});
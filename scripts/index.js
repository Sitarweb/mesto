/** ф-и открытия и закрытия попапа, закрытия по esc **/
import {openPopup, closePopup} from "./popup.js";

/** закрытие при клике на закрывающею кнопку, по оверлею **/
import closeButton from "./const.js";
import closePopupByOverlay from "./popup.js";

closeButton.forEach((button) =>{
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
    popup.addEventListener('click', closePopupByOverlay);
});

/** Profile popup / Попап редактирования профиля **/
import {profilePopup, profileEditing, profileOpenButton, profileName, profileJob, profileFormName, profileFormJob} from "./const.js";

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
import Card from "./Card.js";
import {cardPopup, cardCreate, cardOpenButton, cardsConteiner, cardFormName, cardFormLink} from "./const.js";
import {imagePopup, popupElementImage, popupElementsubtitle} from "./const.js";

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

cardOpenButton.addEventListener('click', () => openPopup(cardPopup));

initialCards.forEach((data) => cardsConteiner.prepend(new Card(data, '#elements-template', increaseImage).generateCard()));

function handleCardFormSubmit (evt){
    evt.preventDefault();
    
    const cardValue = {name: cardFormName.value, link: cardFormLink.value};
    cardsConteiner.prepend(new Card(cardValue, '#elements-template', increaseImage).generateCard());

    evt.target.reset();

    closePopup(cardPopup);
}
cardCreate.addEventListener('submit', handleCardFormSubmit);

/** ф-я увеличения картинки **/
function increaseImage (imageElement, nameElement){
    openPopup(imagePopup);
    popupElementImage.src = imageElement.src;
    popupElementImage.alt = imageElement.alt;
    popupElementsubtitle.textContent = nameElement.textContent;
}

/** валидация форм **/
import formValidator from './FormValidator.js';
import {setting, formList} from './const.js';

formList.forEach((formElement) => {
    new formValidator(setting, formElement).enableValidation();
});
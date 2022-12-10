/** все для валидации **/
const setting = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button-save',
    inactiveButtonClass: 'form__button-save_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
} 
const formList = document.querySelectorAll(setting.formSelector);

export {setting, formList};

/** кнопка открытия попапа редактирования профиля **/
const profileOpenButton = document.querySelector('.profile__edit-button');

/** данные профиля **/
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-paragraph');

/** попап редактирования профиля **/
const profilePopup = document.querySelector('.popup_info');
const profileEditing = profilePopup.querySelector('.popup__content');

/** поля редактирования данных профиля **/
const profileFormName = profileEditing.querySelector('.form__input_mean_name');
const profileFormJob = profileEditing.querySelector('.form__input_mean_job');

export {profilePopup, profileEditing, profileOpenButton, profileName, profileJob, profileFormName, profileFormJob};

/** кнопка открытия попапа добавления карточек **/
const cardOpenButton = document.querySelector('.profile__add-button');

/** место отображения всех созданных карточек **/
const cardsConteiner = document.querySelector('.elements');

/** попап создания карточек **/
const cardPopup = document.querySelector('.popup_card');
const cardCreate = cardPopup.querySelector('.popup__content');

/** поля заполения названия, картинки карточек **/
const cardFormName = cardPopup.querySelector('.form__input_card_title');
const cardFormLink = cardPopup.querySelector('.form__input_card_link');

export {cardPopup, cardCreate, cardOpenButton, cardsConteiner, cardFormName, cardFormLink};

/** попап увеличения картинки **/
const imagePopup = document.querySelector('.popup_images');

const popupElementImage = imagePopup.querySelector('.popup__image');
const popupElementsubtitle = imagePopup.querySelector('.popup__subtitle');

export {imagePopup, popupElementImage, popupElementsubtitle};

/** Кнопки закрытия попапов **/
const closeButton = document.querySelectorAll('.popup__button-close');

export default closeButton;
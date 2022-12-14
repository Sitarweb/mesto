const formList = document.querySelectorAll('.form');

/** --все что касается профиля-- **/

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

/** --все что касается создания карточки-- **/

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

/** --все что касается увеличения картинки-- **/

/** попап увеличения картинки **/
const imagePopup = document.querySelector('.popup_images');

const popupElementImage = imagePopup.querySelector('.popup__image');
const popupElementsubtitle = imagePopup.querySelector('.popup__subtitle');

/** --все закрывающие кнопки попапов-- **/

/** Кнопки закрытия попапов **/
const closeButtons = document.querySelectorAll('.popup__button-close');


export {formList, profilePopup, profileEditing, profileOpenButton, profileName, profileJob, profileFormName, profileFormJob, 
    cardPopup, cardCreate, cardOpenButton, cardsConteiner, cardFormName, cardFormLink,
    imagePopup, popupElementImage, popupElementsubtitle, 
    closeButtons
};
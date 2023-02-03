/** Формы попапов */
const formList = document.querySelectorAll('.form');

/** Попап редактирования профиля **/
const profilePopup = document.querySelector('.popup_info');

/** Кнопка открытия попапа редактирования профиля **/
const profileOpenButton = document.querySelector('.profile__edit-button');

/** Кнопка открытия попапа добавления карточек **/
const cardOpenButton = document.querySelector('.profile__add-button');

/** Увеличиная фотография карточки **/
const popupElementImage = document.querySelector('.popup__image');

/** Подпись к этой фотографии **/
const popupElementSubtitle = document.querySelector('.popup__subtitle');


export {formList, profilePopup,  profileOpenButton, cardOpenButton, popupElementImage, popupElementSubtitle};
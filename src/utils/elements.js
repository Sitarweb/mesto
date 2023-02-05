/** Формы попапов */
const formList = document.querySelectorAll('.form');

/** Попап редактирования профиля **/
const profilePopup = document.querySelector('.popup_info');

const profileInput = profilePopup.querySelectorAll('.form__input');

/** Кнопка открытия попапа редактирования профиля **/
const profileOpenButton = document.querySelector('.profile__edit-button');

/** Кнопка открытия попапа добавления карточек **/
const cardOpenButton = document.querySelector('.profile__add-button');

export {formList, profileInput,  profileOpenButton, cardOpenButton};
import './index.css'; 

import Card from '../components/Card.js';
import {setting, initialCards, validators} from '../utils/const.js';
import formValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {formList, profileInput,  profileOpenButton, cardOpenButton} from '../utils/elements.js';

/** Создаём экземпляр класса UserInfo */
const userInfo = new UserInfo({
    name: '.profile__info-title', 
    work: '.profile__info-paragraph'
});

/** Создаём экземпляр класса PopupWithForm, также выполняется метод setEventListeners */
const popupWithProfile = new PopupWithForm(
    '.popup_info',
    /** Функция выполянется при сабмите, изменяет (сохраняет) данные профиля на странице, также закрывает попап */
    (values) => {
        const data = {
            name: values['profile-form-nickname'],
            work: values['profile-form-job']
        }

        userInfo.setUserInfo(data);
        popupWithProfile.close();
    }
);
popupWithProfile.setEventListeners();

/** Функция переносит данные со страницы в попап редактирования профиля */
function setInputValues(formInput, data){
    formInput.forEach((input) => {
        input.value = data[input.name];
    });
}

/** Открывается попап редактирования профиля, выполняется функция setInputValues */
profileOpenButton.addEventListener('click', () => {
    popupWithProfile.open();
    setInputValues(profileInput, userInfo.getUserInfo());
    validators['profile-form'].resetValidation();
})


/** Функция создает готовую карточку */
function createCard(data){
    return new Card({
        name: data.name, 
        link: data.link
    }, '#elements-template', 
    (link, name) => popupWithImage.open(link, name)
    ).generateCard();
}

/** Создаём экземпляр класса Section, также выполняется метод renderItems */
const section = new Section({
    items: initialCards, 
    /** Функция добавляет созданную карточку на страницу */
    renderer: (data) => {
        section.addItem(createCard(data));
    }
}, '.elements');
section.renderItems();

/** Создаём экземпляр класса PopupWithForm, также выполняется метод setEventListeners */
const popupWithCard = new PopupWithForm(
    '.popup_card', 
    /** Функция выполянется при сабмите, добавляет на страницу новую карточку, также закрывает попап */
    (values) => {
        const data = {
            name: values["card-form-title"], 
            link: values["card-form-link"]
        }

        section.addItem(createCard(data));
        popupWithCard.close();
    }
);
popupWithCard.setEventListeners();

/** Открывается попап создания карточки */
cardOpenButton.addEventListener('click', () => {
    popupWithCard.open();
    validators['card-form'].resetValidation();
}) 

/** Создается экземпляр класса PopupWithImage, также выполняется метод setEventListeners */
const popupWithImage = new PopupWithImage('.popup_images');
popupWithImage.setEventListeners();


/** В объект validators заполняются экземпляры валидаторов форм, также выполняется метод enableValidation */
formList.forEach((formElement) => {
    const validator = new formValidator(setting, formElement);
    validator.enableValidation();
    validators[formElement.name] = validator;
});
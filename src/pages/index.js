import './index.css'; 
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import {setting, validators} from '../utils/const.js';
import formValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {formList, profileOpenButton, cardOpenButton, avatarOpenButton} from '../utils/elements.js';

/** Создаём экземпляр класса Api */
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-60',
    headers: {
        authorization: '4de0a39e-3417-42f5-abc3-6ae009a02a8f',
        'Content-Type': 'application/json'
    }
});

/** Отрисовывается страница (все данные приходят с сервера) */
api.getAllNeededData()
    .then((res) => {
        const [dataForUserInfo, dataForCards] = res;
        
        userInfo.setUserInfo(dataForUserInfo);
        userInfo.setUserAvatar(dataForUserInfo.avatar);

        section.renderItems(dataForCards);
        
    })
    .catch(err => console.log(err));

/** Создаём экземпляр класса UserInfo */
const userInfo = new UserInfo({
    name: '.profile__info-title', 
    about: '.profile__info-paragraph',
    avatar: '.profile__avatar'
});

/** Создаём экземпляр класса PopupWithForm, также выполняется метод setEventListeners */
const popupWithProfile = new PopupWithForm(
    '.popup_info',
    /** Функция выполянется при сабмите, изменяет (сохраняет) данные профиля на странице, также закрывает попап */
    (values) => {
        const data = {
            name: values['profile-form-nickname'],
            about: values['profile-form-job']
        }

        /** Происходит запрос на обновление данных о пользователе */
        return api.patchUserInfo(data)
        /** Если он успешный, то далее происходят изменения на странице, а если нет то в консоль выводиться, что пошло не так */
        .then(() => userInfo.setUserInfo(data))
        .catch(err => console.log(err));
    }
);
popupWithProfile.setEventListeners();

/** Открывается попап редактирования профиля, выполняется функция setInputValues */
profileOpenButton.addEventListener('click', () => {
    popupWithProfile.open();
    popupWithProfile.setInputValues(userInfo.getUserInfo());
    validators['profile-form'].resetValidation();
})

/** Функция создает готовую карточку */
function createCard(data){
    const card = new Card({
        name: data.name, 
        link: data.link,
        likes: data.likes,
        id: data._id,
        owner: data.owner
    }, '#elements-template', 

    /** колбэк функция увеличивает фотографию карточки */
    (link, name) => popupWithImage.open(link, name),

    /** колбэк функция открывает попап, который удаляет карточку, а при согласии удаляет */
    (cardId, element) => {
        popupWithConfirmation.open(() => {
            api.deleteCard(cardId)
            .then(() => {
                element.remove();
                popupWithConfirmation.close();
            })
            .catch(err => console.log(err));
        });

    },
    /** колбэк функция ставит (удаляет) карточки лайк */
    (cardId, isLike) => {
        if(!isLike){
            api.putLike(cardId)
            .then((data) => {
                card.setLikesView(data.likes);
            })
            .catch(err => console.log(err));
        }else{
            api.deleteLike(cardId)
            .then((data) => {
                card.setLikesView(data.likes);
            })
            .catch(err => console.log(err));
        }

    },
    userInfo.getUserInfo().id);

    return card.generateCard();
}

/** Создаём экземпляр класса Section */
const section = new Section({ 
    /** Функция добавляет созданную карточку на страницу */
    renderer: (data) => {
        section.addItem(createCard(data));
    }
}, '.elements');

/** Создаём экземпляр класса PopupWithForm, также выполняется метод setEventListeners */
const popupWithCard = new PopupWithForm(
    '.popup_card', 
    /** Функция выполянется при сабмите, добавляет на страницу новую карточку, также закрывает попап */
    (values) => {
        const data = {
            name: values["card-form-title"], 
            link: values["card-form-link"]
        }

        /** На сервер добавляется новая карточка */
        return api.postNewCard(data)
        /** Если он успешный, то на странице появляется карточка, а если нет то в консоль выводиться, что пошло не так */
        .then((data) => section.addItem(createCard(data)))
        .catch(err => console.log(err));
        
    }
);
popupWithCard.setEventListeners();

/** Открывается попап создания карточки */
cardOpenButton.addEventListener('click', () => {
    popupWithCard.open();
    validators['card-form'].resetValidation();
}); 

/** Создается экземпляр класса PopupWithImage, также выполняется метод setEventListeners */
const popupWithImage = new PopupWithImage('.popup_images');
popupWithImage.setEventListeners();

/** Создаём экземпляр класса PopupWithForm, также выполняется метод setEventListeners */
const popupWithAvatar = new PopupWithForm(
    '.popup_avatar',
    (value) => {
        const data = {
            link: value["avatar-form-link"]
        }

        /** Происходит запрос на обновление аватара профиля */
        return api.patchUserAvatar(data)
        /** Если он успешный, то аватар профиля обновляется, а если нет то в консоль выводиться, что пошло не так */
        .then(() => userInfo.setUserAvatar(data.link))
        .catch(err => console.log(err));
    }
);
popupWithAvatar.setEventListeners();

/** Открывается попап обнавления аватара профиля, выполняется функция setInputValues */
avatarOpenButton.addEventListener('click', () => {
    popupWithAvatar.open();
    popupWithAvatar.setInputValues(userInfo.getUserAvatar());
    validators['avatar-form'].resetValidation();
});

/** Создается экземпляр класса PopupWithConfirmation, также выполняется метод setEventListeners */
const popupWithConfirmation = new PopupWithConfirmation('.popup_urn');
popupWithConfirmation.setEventListeners();

/** В объект validators заполняются экземпляры валидаторов форм, также выполняется метод enableValidation */
formList.forEach((formElement) => {
    const validator = new formValidator(setting, formElement);
    validator.enableValidation();
    validators[formElement.name] = validator;
});
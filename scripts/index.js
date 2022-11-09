/** функции открытия и закрытия попапа **/

function openPopup (popup){
    popup.classList.add('popup_is-opened');
}

function closePopup (popup){
    popup.classList.remove('popup_is-opened');
}

/** Наведение слушателей на закрывающую кнопку попапа **/

const closeButton = document.querySelectorAll('.popup__button-close');

closeButton.forEach((button) =>{
    
    const popup = button.closest('.popup');

    button.addEventListener('click', () => closePopup(popup));
});

/** Profile popup / Попап редактирования профиля **/

const profilePopup = document.querySelector('.popup_info');
const profileEditing = profilePopup.querySelector('.popup__content');

const profileOpenButton = document.querySelector('.profile__edit-button');

const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-paragraph');

const profileFormName = profileEditing.querySelector('.form__input_mean_name');
const profileFormJob = profileEditing.querySelector('.form__input_mean_job');

profileOpenButton.addEventListener('click', () => {
    openPopup(profilePopup);
    profileFormName.value = profileName.textContent;
    profileFormJob.value = profileJob.textContent;
});

function SavingProfileForm (evt){
    evt.preventDefault();
    profileName.textContent = profileFormName.value;
    profileJob.textContent = profileFormJob.value;
    closePopup(profilePopup);
}
profileEditing.addEventListener('submit', SavingProfileForm);

/** Cards popup / Попап добавления карточки **/

const cardPopup = document.querySelector('.popup_card');
const cardCreate = cardPopup.querySelector('.popup__content');

const cardsConteiner = document.querySelector('.elements');

const cardOpenButton = document.querySelector('.profile__add-button');

const cardFormName = cardPopup.querySelector('.form__input_card_title');
const cardFormLink = cardPopup.querySelector('.form__input_card_link');

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

function creatingCard (cardInfo) {
    const cardTemplate = document.querySelector('#elements-template').content;
    const cardElements = cardTemplate.querySelector('.elements__card').cloneNode(true);

    const cardTitle = cardElements.querySelector('.elements__title');
    const cardImage = cardElements.querySelector('.elements__image');
    const cardLikeButton = cardElements.querySelector('.elements__heart-button');
    const cardDeleteButton = cardElements.querySelector('.elements__urn');

    cardTitle.textContent = cardInfo.name;
    cardImage.src = cardInfo.link;
    cardImage.alt = cardInfo.name;

    cardLikeButton.addEventListener('click', (evt) => evt.target.classList.toggle('elements__heart-button_active'));
    cardDeleteButton.addEventListener('click',() => cardElements.remove());
    /** Увеличение картинки **/
    cardImage.addEventListener('click', (evt) =>{
        openPopup(imagePopup);
        popupElementImage.src = evt.target.src;
        popupElementsubtitle.textContent = cardTitle.textContent;
    });

    return cardElements;
}

initialCards.forEach((item) => cardsConteiner.prepend(creatingCard(item)));

function cardAdd (evt){
    evt.preventDefault();
    
    const cardValue = {name: cardFormName.value, link: cardFormLink.value};
    cardsConteiner.prepend(creatingCard(cardValue));

    cardFormName.value = '';
    cardFormLink.value = '';

    closePopup(cardPopup);
}
cardCreate.addEventListener('submit', cardAdd);


/** Image popup / Попап увеличения картинки в карточке **/

const imagePopup = document.querySelector('.popup_images');

const popupElementImage = imagePopup.querySelector('.popup__image');
const popupElementsubtitle = imagePopup.querySelector('.popup__subtitle');


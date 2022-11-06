/** Попап редактирования профиля **/
const popupInfo = document.querySelector('.popup_info');
const infoForm = popupInfo.querySelector('.popup__content');

const openPopupInfo = document.querySelector('.profile__edit-button'); 
const closePopupInfo = popupInfo.querySelector('.popup__button-close');

let valuesName = popupInfo.querySelector('.form__input_mean_name');
let valuesJob = popupInfo.querySelector('.form__input_mean_job');

let profileName = document.querySelector('.profile__info-title');
let profileParagraph = document.querySelector('.profile__info-paragraph');

 openPopupInfo.addEventListener('click', () => {
    popupInfo.classList.add('popup_is-opened');
    valuesName.value = profileName.textContent;
    valuesJob.value = profileParagraph.textContent;
});

 function formSubmit (evt){
    evt.preventDefault();
    profileName.textContent = valuesName.value;
    profileParagraph.textContent = valuesJob.value;
    closeInfo();
}
infoForm.addEventListener('submit', formSubmit);

function closeInfo(){
    popupInfo.classList.remove('popup_is-opened');
}
closePopupInfo.addEventListener('click', closeInfo);

/** Попап добавления карточки **/
const popupCard = document.querySelector('.popup_card');
const cardForm = popupCard.querySelector('.popup__content');

const openPopupCard = document.querySelector('.profile__add-button');
const closePopupCard = popupCard.querySelector('.popup__button-close');

let valuesTitle = popupCard.querySelector('.form__input_card_title');
let valuesLink = popupCard.querySelector('.form__input_card_link');

const elementsStorage = document.querySelector('.elements')

function addCard(evt){
    evt.preventDefault();
    const cardTemplate = document.querySelector('#elements-template').content;
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);

    cardElement.querySelector('.elements__title').textContent = valuesTitle.value;
    cardElement.querySelector('.elements__image').src = valuesLink.value;
    cardElement.querySelector('.elements__image').alt = valuesTitle.value;
    cardElement.querySelector('.elements__heart-button').addEventListener('click', (evt) =>{
        evt.target.classList.toggle('elements__heart-button_active');
    });
    cardElement.querySelector('.elements__urn').addEventListener('click', () =>{
        cardElement.remove();
    });
    cardElement.querySelector('.elements__image').addEventListener('click', (evt) =>{
        popupImage.classList.add('popup_is-opened');
        imageElement.src = evt.target.src;
        subtitleElement.textContent = cardElement.querySelector('.elements__title').textContent;
    });

    elementsStorage.prepend(cardElement)
    closeCard();
    
}
cardForm.addEventListener('submit', addCard);


openPopupCard.addEventListener('click', () => {
    popupCard.classList.add('popup_is-opened');
    valuesTitle.value = '';
    valuesLink.value = '';
});

function closeCard(){
    popupCard.classList.remove('popup_is-opened');
}
closePopupCard.addEventListener('click', closeCard); 


/** Открытие картинки **/

const popupImage = document.querySelector('.popup_images');
const popupOPen = Array.from(document.querySelectorAll('.elements__image')); 
const imageElement = popupImage.querySelector('.popup__image');
const popupText = document.querySelectorAll('.elements__title');
const subtitleElement = popupImage.querySelector('.popup__subtitle');
const closePopupImage = popupImage.querySelector('.popup__button-close');


popupOPen.forEach((item) => {
    let i = popupOPen.indexOf(item);
    item.addEventListener('click', (evt) =>{
        popupImage.classList.add('popup_is-opened');
        imageElement.src = evt.target.src;
        subtitleElement.textContent = popupText[i].textContent;
    });
});

closePopupImage.addEventListener('click', () =>{
    popupImage.classList.remove('popup_is-opened');
});


/** Постовить лайк **/
const likeButton = elementsStorage.querySelectorAll('.elements__heart-button');

likeButton.forEach( (item) => {
    item.addEventListener('click', (evt) =>{
        evt.target.classList.toggle('elements__heart-button_active');
    });
});

/** Удаление карточки **/

const urn = Array.from(document.querySelectorAll('.elements__urn'));
const card = elementsStorage.querySelectorAll('.elements__card');

urn.forEach( (item) => {
    let i = urn.indexOf(item);
    item.addEventListener('click', () =>{
        card[i].remove();
    });
});



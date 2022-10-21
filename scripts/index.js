/** popup **/
const openButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');

openButton.addEventListener('click', function (){
    popup.classList.add('popup__open');
});

closeButton.addEventListener('click', function (){
    popup.classList.remove('popup__open');
});

const popupContent = popup.querySelector('.popup__content');
let inputName = popup.querySelector('.form__input-name');
let inputJob = popup.querySelector('.form__input-job');
const saveButton = popup.querySelector('.form__button-save');

let profileName = document.querySelector('.profile__info-title');
let profileParagraph = document.querySelector('.profile__info-paragraph');

function formSubmit (evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileParagraph.textContent = inputJob.value;
}

popupContent.addEventListener('submit', formSubmit);

saveButton.addEventListener('click', function (){
    popup.classList.remove('popup__open');
});

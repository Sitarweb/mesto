/** popup **/
const openButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__button-close');


const popupContent = popup.querySelector('.popup__content');
let inputValuesName = popup.querySelector('.form__input_mean_name');
let inputValuesJob = popup.querySelector('.form__input_mean_job');

let profileName = document.querySelector('.profile__info-title');
let profileParagraph = document.querySelector('.profile__info-paragraph');

function formSubmit (evt){
    evt.preventDefault();
    profileName.textContent = inputValuesName.value;
    profileParagraph.textContent = inputValuesJob.value;
    closeForm();
}

popupContent.addEventListener('submit', formSubmit);

openButton.addEventListener('click', function (){
    popup.classList.add('popup_is-opened');
});

function closeForm(){
    popup.classList.remove('popup_is-opened');
}

closeButton.addEventListener('click', closeForm);
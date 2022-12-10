/** ф-и открытия и закрытия попапа, закрытия по esc **/
function openPopup (popup){
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup (popup){
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupEsc);
}

/** Закрытие попапа по esc**/
function closePopupEsc(evt){
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_is-opened');
        closePopup(popup);
    }
}

export {openPopup, closePopup};

/** Закрытие попапа по оверлею**/
function closePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }

export default closePopupByOverlay;
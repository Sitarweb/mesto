import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupImageSubtitle = this._popup.querySelector('.popup__subtitle');
    }
    /** Метод увеличивает картинку при клике на неё */
    open(link, name){
        super.open();
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupImageSubtitle.textContent = name;
    }
}
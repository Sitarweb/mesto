import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(selector, image, imageSubtitle){
        super(selector);
        this._popupImage = image;
        this._popupImageSubtitle = imageSubtitle;
    }
    /** Метод увеличивает картинку при клике на неё */
    open(link, name){
        super.open();
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupImageSubtitle.textContent = name;
    }
}
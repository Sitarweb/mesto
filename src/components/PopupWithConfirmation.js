import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup{
    constructor(selector){
        super(selector);

        this._form = this._popup.querySelector('.popup__form');
    }
    
    open(submit){
        super.open();
        this._submit = submit;
    }

    setEventListeners(){
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit();
        });
    }
    
}
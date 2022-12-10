export default class Card{
    constructor(data, template, increaseImage){
        this._text = data.name;
        this._image = data.link;
        this._template = template;
        this._increaseImage = increaseImage;
    }

    _getTemplate(){
        const element = document
        .querySelector(this._template)
        .content
        .querySelector('.elements__card')
        .cloneNode(true);
        return element;
    }

    generateCard(){
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.elements__image');
        this._nameElement = this._element.querySelector('.elements__title');
        this._likeButton = this._element.querySelector('.elements__heart-button');
        this._removeButton = this._element.querySelector('.elements__urn');

        this._imageElement.src = this._image;
        this._imageElement.alt = this._text;
        this._nameElement.textContent = this._text;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners(){
        this._imageElement.addEventListener('click', () => this._fullImageElement());
        this._likeButton.addEventListener('click', () => this._toggleLike())
        this._removeButton.addEventListener('click', () => this._removeElement());
    }

    _fullImageElement(){
        this._increaseImage(this._imageElement, this._nameElement);
    }

    _toggleLike(){
        this._likeButton.classList.toggle('elements__heart-button_active');
    }

    _removeElement(){
        this._element.remove();
    }
}
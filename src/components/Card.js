export default class Card{
    constructor(data, template, handleCardClick){
        this._text = data.name;
        this._imageLink = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }
    /** Метод создает пустую карточку */
    _getTemplate(){
        const element = document
        .querySelector(this._template)
        .content
        .querySelector('.elements__card')
        .cloneNode(true);
        return element;
    }
    /** Метод возвращает готовую карточку */
    generateCard(){
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.elements__image');
        this._nameElement = this._element.querySelector('.elements__title');
        this._likeButton = this._element.querySelector('.elements__heart-button');
        this._removeButton = this._element.querySelector('.elements__urn');

        this._imageElement.src = this._imageLink;
        this._imageElement.alt = this._text;
        this._nameElement.textContent = this._text;

        this._setEventListeners();

        return this._element;
    }
    /** Метод навешивает слушатели на элементы карточки */
    _setEventListeners(){
        this._imageElement.addEventListener('click', () => this._fullImageElement());
        this._likeButton.addEventListener('click', () => this._toggleLike())
        this._removeButton.addEventListener('click', () => this._removeElement());
    }
    /** Метод передает функции данные, которые используются при увелечении фотографии */
    _fullImageElement(){
        this._handleCardClick(this._imageLink, this._text);
    }
    /** Метод добавляет (удаляет) кнопке лайка селектор, по которому она меняет цвет */
    _toggleLike(){
        this._likeButton.classList.toggle('elements__heart-button_active');
    }
    /** Метод удаляет карточку */
    _removeElement(){
        this._element.remove();
    }
}
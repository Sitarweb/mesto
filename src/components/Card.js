export default class Card{
    constructor(data, template, handleCardClick, handleDeleteIconClick, handleLikeIconClick, userInfoId){
        this._text = data.name;
        this._imageLink = data.link;
        this._likes = data.likes;
        this._cardId = data.id;
        this._ownerId = data.owner._id === userInfoId;
        this._template = template;
        this._userInfoId = userInfoId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._handleLikeIconClick = handleLikeIconClick;

        this._isLike = this._likes.some(data => data._id === this._userInfoId);
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
        this._nameElement = this._element.querySelector('.elements__title');
        this._imageElement = this._element.querySelector('.elements__image');
        this._likeButton = this._element.querySelector('.elements__heart-button');
        this._likeCounter = this._element.querySelector('.elements__likes-counter');
        this._removeButton = this._element.querySelector('.elements__urn');
        
        this._nameElement.textContent = this._text;
        this._imageElement.src = this._imageLink;
        this._imageElement.alt = this._text;
        this._likeCounter.textContent = this._likes.length;

        if(!this._ownerId){
            this._removeButton.remove();
        }

        this._setEventListeners();

        return this._element;
    }
    /** Метод навешивает слушатели на элементы карточки */
    _setEventListeners(){
        this._imageElement.addEventListener('click', () => this._fullImageElement());
        if (this._ownerId) {this._removeButton.addEventListener('click', () => this._openDeleteCardPopup());}
        this._likeButton.addEventListener('click', () => this._toggleLike());
        
    }
    /** Метод передает функции данные, которые используются при увелечении фотографии */
    _fullImageElement(){
        this._handleCardClick(this._imageLink, this._text);
    }
    /** Метод открывает попап, который удаляет карточку */
    _openDeleteCardPopup(){
        this._handleDeleteIconClick(this._cardId, this._element);
    }
    /** Метод отправляет ставит (удаляет) лайк на сервере */
    _toggleLike(){
        this._handleLikeIconClick(this._cardId, this._isLike);
    }
    /** Метод добавляет (удаляет) кнопке лайка селектор, по которому она меняет цвет */
    setLikesView(likes){
        this._likeCounter.textContent = likes.length;
        if (!this._isLike){
            this._likeButton.classList.add('elements__heart-button_active');
            this._isLike = true;
        } else {
            this._likeButton.classList.remove('elements__heart-button_active');
            this._isLike = false;
        }
    }
    
}
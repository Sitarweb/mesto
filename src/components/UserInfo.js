export default class UserInfo{
    constructor(data){
        this._userName = document.querySelector(data.name);
        this._userWork = document.querySelector(data.about);
        this._userAvatar = document.querySelector(data.avatar);
    }
    /** Метод создает объект с данными, которые подставляются в форму, при её открытии */
    getUserInfo(){
        return {
            'profile-form-nickname': this._userName.textContent,
            'profile-form-job': this._userWork.textContent,
            id: this._id
        }
    }
    /** Метод меняет данные о пользователе на странице (или сохраняет) при cабмите формы */
    setUserInfo(userInfo){
        this._id = userInfo._id;
        this._userName.textContent = userInfo.name;
        this._userWork.textContent = userInfo.about;
    }
    /** Метод создает объект с ссылкой, которая подставляется в форму обновления аватара, при её открытии */
    getUserAvatar(){
        return {
            'avatar-form-link': this._userAvatar.src
        }
    }
    /** Метод обновляет аватар пользователя */
    setUserAvatar(avatar){
        this._userAvatar.src = avatar;
    }
}
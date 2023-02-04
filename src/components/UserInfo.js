export default class UserInfo{
    constructor(data){
        this._userName = document.querySelector(data.name);
        this._userWork = document.querySelector(data.work);
    }
    /** Метод создает объект с данными, которые подставляются в форму, при её открытии */
    getUserInfo(){
        return {
            'profile-form-nickname': this._userName.textContent,
            'profile-form-job': this._userWork.textContent
        }
    }
    /** Метод меняет данные о пользователе на странице (или сохраняет) при cабмите формы */
    setUserInfo(userInfo){
        this._userName.textContent = userInfo.name;
        this._userWork.textContent = userInfo.work;
    }
}
export default class Section{
    constructor({renderer}, selector){
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }
    /** Метод отвечает за отрисовку всех элементов */
    renderItems(initialArray){
        initialArray.forEach((item) => this._renderer(item));
    }
    /** Метод принимает DOM-элемент и добавляет его в контейнер */
    addItem(item){
        this._container.prepend(item);
    }
}
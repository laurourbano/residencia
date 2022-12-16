export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    template(model) {
        throw Error('A classe filha deverá implementar o template');
    }
}

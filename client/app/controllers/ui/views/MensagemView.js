class MensagemView extends View {
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
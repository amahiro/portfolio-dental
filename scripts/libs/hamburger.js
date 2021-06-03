class Hamburger {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.hamburger');
        this.DOM.nav = document.querySelector('.header__nav');
        this.DOM.body = document.querySelector('body');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.btn.classList.toggle('hamburger-open');
        this.DOM.nav.classList.toggle('header__nav--open');
        this.DOM.body.classList.toggle('body-fixed');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

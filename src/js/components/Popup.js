export default class Popup {
  constructor() {
    this.popup = document.querySelector('.popup');
    this.signup = document.querySelector('#signup');
    this.signin = document.querySelector('#signin');
    this.registered = document.querySelector('#registered');
    this.signinOpen = document.querySelector('.header__login');
    this.signupOpen = document.querySelector('#signin .popup__form-link');
    this.signupFromSignin = document.querySelector('#signin .popup__form-link');
    this.signinFromSignup = document.querySelector('#signup .popup__form-link');
    this.signinFromRegistered = document.querySelector('#registered .popup__form-link');
    this.signinClose = document.querySelector('#signin .popup__image');
    this.signupClose = document.querySelector('#signup .popup__image');
  }

  open(event) {
    this.popup.classList.add('popup_visible');
    this.setContent(event);
  }

  close(event) {
    this.popup.classList.remove('popup_visible');
    this.clearContent(event.target);
  }

  setContent(event) {
    switch (event.target) {
      case this.signinOpen:
        this.signin.classList.add('popup__content_visible');
        break;
      case this.signupFromSignin:
        this.signup.classList.add('popup__content_visible');
        this.clearContent(this.signinClose);
        break;
      case this.signinFromSignup:
        this.signin.classList.add('popup__content_visible');
        this.clearContent(this.signupClose);
        break;
      case this.signinFromRegistered:
        this.signin.classList.add('popup__content_visible');
        this.clearContent(false);
        break;
      default:
        this.registered.classList.add('popup__content_visible');
    }
  }

  clearContent(target) {
    if (target === this.signinClose || target === this.signin) {
      this.signin.classList.remove('popup__content_visible');
    } else if (target === this.signupClose || target === this.signup) {
      this.signup.classList.remove('popup__content_visible');
    } else {
      this.registered.classList.remove('popup__content_visible');
    }
  }
}

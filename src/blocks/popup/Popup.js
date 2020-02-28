export default class Popup {
  constructor() {
    this.popupSigninOpen = document.querySelector('.header__login');
    this.popupSignupOpen = document.querySelector('#popup-signin .popup__form-link');
    this.popupSigninFromSignup = document.querySelector('#popup-signup .popup__form-link');
    this.popupSigninClose = document.querySelector('#popup-signin .popup__image');
    this.popupSignupClose = document.querySelector('#popup-signup .popup__image');
  }

  open(event) {
    if (event.target === this.popupSigninOpen) {
      document.querySelector('#popup-signin').classList.toggle('popup_visible');
    }
    if (event.target === this.popupSigninFromSignup) {
      document.querySelector('#popup-signup').classList.toggle('popup_visible');
      document.querySelector('#popup-signin').classList.toggle('popup_visible');
    }
    if (event.target === this.popupSignupOpen) {
      document.querySelector('#popup-signin').classList.toggle('popup_visible');
      document.querySelector('#popup-signup').classList.toggle('popup_visible');
    }
  }

  close(event) {
    console.log(event.target);
    console.log(this.popupSignupClose);
    console.log(event.target === this.popupSignupClose);
    if (event.target === this.popupSigninClose) {
      document.querySelector('#popup-signin').classList.toggle('popup_visible');
    }
    if (event.target === this.popupSignupClose) {
      document.querySelector('#popup-signup').classList.toggle('popup_visible');
    }
  }
}

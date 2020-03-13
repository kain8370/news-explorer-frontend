/* eslint-disable no-param-reassign */
export default class Form {
  constructor() {
    this.formSignin = document.forms.signin;
    this.formSignup = document.forms.signup;
    [this.signinInputEmail, this.signinInputPassword, this.signinButton] = document.forms.signin;
    [this.signupInpuEmail,
      this.signupInputPassword,
      this.signupInputName,
      this.signupButton] = document.forms.signup;
    this.signinServerError = document.querySelector('#signin .popup__server-error');
    this.signupServerError = document.querySelector('#signup .popup__server-error');
  }

  setServerError(message) {
    if (this.formSignin.parentElement.classList.contains('popup__content_visible')) {
      this.signinServerError.textContent = message;
    } else {
      this.signupServerError.textContent = message;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _validateInputElement(elem) {
    return elem.checkValidity();
  }

  validateForm(form) {
    if (Array.from(form).slice(0, -1).every((formElem) => this._validateInputElement(formElem))) {
      this._makeButtonActive(form);
      return true;
    }
    this._makeButtonUnactive(form);
    return false;
  }

  clear(form) {
    Array.from(form.elements).forEach((formElem) => {
      if (!formElem.classList.contains('popup__form-button')) {
        formElem.value = '';
        formElem.nextElementSibling.textContent = '';
      } else {
        formElem.previousElementSibling.textContent = '';
      }
    });
    this._makeButtonUnactive(form);
  }

  // eslint-disable-next-line class-methods-use-this
  getInfo(form) {
    let result = '';
    result = Array.from(form).reduce((prevVal, formElem) => {
      if (formElem.name) {
        // eslint-disable-next-line no-param-reassign
        prevVal[formElem.name] = formElem.value;
      }
      return prevVal;
    }, {});
    return result;
  }

  _makeButtonActive(form) {
    if (form === this.formSignin) {
      this.signinButton.removeAttribute('disabled');
    } else {
      this.signupButton.removeAttribute('disabled');
    }
  }

  _makeButtonUnactive(form) {
    if (form === this.formSignin) {
      this.signinButton.setAttribute('disabled', '');
    } else {
      this.signupButton.setAttribute('disabled', '');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  showErrorMessage(elem) {
    if (elem.validity.tooShort) {
      const max = elem.getAttribute('maxlength');
      elem.nextElementSibling.textContent = max ? `Должно быть от ${elem.getAttribute('minlength')} до ${elem.getAttribute('maxlength')} символов` : `Должно быть не меншьше ${elem.getAttribute('minlength')} символов`;
    } else if (elem.validity.patternMismatch) {
      elem.nextElementSibling.textContent = elem.getAttribute('name') === 'email' ? 'Неправильный формат email' : 'Неправильный формат имени';
    } else {
      elem.nextElementSibling.textContent = '';
    }
  }
}

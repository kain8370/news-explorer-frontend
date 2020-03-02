import './pages/index.css';
import Popup from './blocks/popup/Popup';

const popup = new Popup();

document.querySelector('.header__login').addEventListener('click', (event) => {
  popup.open(event);
});
document.querySelector('#popup-signin .popup__form-link').addEventListener('click', (event) => {
  console.log('popupSignin');
  popup.open(event);
});
document.querySelector('#popup-signup .popup__form-link').addEventListener('click', (event) => {
  console.log('popupSignup');
  popup.open(event);
});
document.querySelector('#popup-signin .popup__image').addEventListener('click', (event) => {
  popup.close(event);
});
document.querySelector('#popup-signup .popup__image').addEventListener('click', (event) => {
  popup.close(event);
});

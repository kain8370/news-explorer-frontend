import '../pages/index.css';
import Popup from './components/Popup';
import Header from './components/Header';
import Form from './components/Form';
import MainApi from './api/MainApi';

import handlerShowMore from './utils/handerShowMore';
import searchNews from './utils/searchNews';
import signin from './utils/signin';
import signup from './utils/signup';
import saveArticles from './utils/saveArticles';

const mainApiUrl = 'https://api.kain-news.ru';

const popup = new Popup();
const header = new Header({ color: 'white' });
const form = new Form();
const mainApi = new MainApi(mainApiUrl);

if (localStorage.getItem('token')) {
  header.render({ isLoggedIn: true, userName: localStorage.getItem('name') });
} else {
  header.render({ isLoggedIn: false, userName: '' });
}

document.querySelector('.header__login').addEventListener('click', popup.open.bind(popup));
document.querySelector('#registered .popup__form-link').addEventListener('click', popup.open.bind(popup));
document.querySelector('#signin .popup__form-link').addEventListener('click', (e) => {
  popup.open(e);
  form.clear(e.target.parentElement.parentElement);
});
document.querySelector('#signup .popup__form-link').addEventListener('click', (e) => {
  popup.open(e);
  form.clear(e.target.parentElement.parentElement);
});

document.querySelector('#signin .popup__image').addEventListener('click', (e) => {
  popup.close(e);
  form.clear(e.target.nextElementSibling.nextElementSibling);
});
document.querySelector('#signup .popup__image').addEventListener('click', (e) => {
  popup.close(e);
  form.clear(e.target.nextElementSibling.nextElementSibling);
});
document.querySelector('#registered .popup__image').addEventListener('click', (e) => {
  popup.close(e);
  form.clear(e.target.parentElement);
});

document.forms.signin.addEventListener('input', (event) => {
  form.validateForm(event.target.parentElement.parentElement);
  form.showErrorMessage(event.target);
});
document.forms.signup.addEventListener('input', (event) => {
  form.validateForm(event.target.parentElement.parentElement);
  form.showErrorMessage(event.target);
});

document.querySelector('.search__form').addEventListener('submit', searchNews);

document.querySelector('.results__button').addEventListener('click', handlerShowMore);

document.querySelector('#signup').addEventListener('submit', signup);

document.querySelector('#signin').addEventListener('submit', signin);

document.querySelector('.header__logout').addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  document.location.href = '/';
});

document.querySelector('.results__container').addEventListener('mouseover', (e) => {
  const items = document.querySelectorAll('.card__icon');
  if (Array.from(items).concat(e.target)) {
    if (!localStorage.getItem('token')) {
      e.target.classList.toggle('message-visible');
    }
  }
});

document.querySelector('.results__container').addEventListener('mouseout', (e) => {
  const items = document.querySelectorAll('.card__icon');
  if (Array.from(items).concat(e.target)) {
    if (!localStorage.getItem('token')) {
      e.target.classList.toggle('message-visible');
    }
  }
});

document.querySelector('.results__container').addEventListener('click', saveArticles);

document.querySelector('.results__container').addEventListener('click', async (e) => {
  const items = document.querySelectorAll('.card__icon');
  if (Array.from(items).concat(e.target)) {
    if (localStorage.getItem('token') && e.target.classList.contains('card__icon_active')) {
      const elem = e.target.parentElement;
      await mainApi.removeArticle(elem.getAttribute('data-id'));
      e.target.classList.remove('card__icon_active');
    }
  }
});

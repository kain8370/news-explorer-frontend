import '../../pages/my-page.css';
import Header from '../components/Header';
import MainApi from '../api/MainApi';

import renderMyPage from '../utils/renderMyPage';

if (!localStorage.getItem('token')) {
  document.location.href = '/';
}

const mainApiUrl = 'https://api.kain-news.ru';
const header = new Header();
const mainApi = new MainApi(mainApiUrl);

header.render({ isLoggedIn: true, userName: localStorage.getItem('name') });
renderMyPage();

document.querySelector('.content').addEventListener('click', async (e) => {
  if (Array.from(document.querySelectorAll('.card__icon')).concat(e.target)) {
    try {
      await mainApi.removeArticle(e.target.parentElement.getAttribute('data-id'));
    } catch (err) {
      return;
    }
    document.querySelector('.content').removeChild(e.target.parentElement);
    document.querySelector('#count').textContent -= 1;
  }
});

document.querySelector('.header__logout').addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  document.location.href = '/';
});

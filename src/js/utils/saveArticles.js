import MainApi from '../api/MainApi';

const mainApiUrl = 'https://api.kain-news.ru';
const mainApi = new MainApi(mainApiUrl);

export default async function saveArticles(e) {
  const cardIcons = document.querySelectorAll('.card__icon');
  if (Array.from(cardIcons).concat(e.target)) {
    if (localStorage.getItem('token')) {
      const elem = e.target.parentElement;
      const data = {};
      data.image = elem.querySelector('.card__image').src;
      data.link = elem.querySelector('.card__content').href;
      data.date = elem.querySelector('.card__date').textContent.trim();
      data.title = elem.querySelector('.card__title').textContent.trim();
      data.text = elem.querySelector('.card__text').textContent.trim();
      data.source = elem.querySelector('.card__source').textContent;
      data.keyword = elem.getAttribute('data-keyword');
      try {
        const res = await mainApi.createArticles(data);
        e.target.parentElement.setAttribute('data-id', res.data._id);
      } catch (err) {
        return;
      }
      e.target.classList.add('card__icon_active');
    }
  }
}

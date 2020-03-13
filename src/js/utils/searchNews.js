import NewsApi from '../api/NewsApi';
import NewsCard from '../components/NewsCard';
import NewsCardList from '../components/NewsCardList';

const newsApiOptions = {
  url: 'https://newsapi.org/v2',
  apiKey: 'aadd0ae0380945d19313950a3b7e5de6',
};
const newsApi = new NewsApi(newsApiOptions);
const newsCardList = new NewsCardList(document.querySelector('.results__container'));
const buttonShowMore = document.querySelector('.results__button');

export default async function searchNews(e) {
  e.preventDefault();
  document.querySelector('.preloader').classList.toggle('preloader_visible');
  localStorage.removeItem('articles');
  try {
    await newsApi.getNews();
  } catch (err) {
    document.querySelector('.preloader').classList.toggle('preloader_visible');
    return;
  }
  if (JSON.parse(localStorage.getItem('articles')).length > 0) {
    document.querySelector('.results__container').innerHTML = '';
    localStorage.setItem('keyword', document.querySelector('.search__form-input').value);
    const articles = JSON.parse(localStorage.getItem('articles'));
    articles.splice(0, 3).forEach((elem) => {
      const card = new NewsCard(elem, localStorage.getItem('keyword'));
      newsCardList.addCard(card.getCard());
    });
    if (articles.length > 0) {
      buttonShowMore.classList.add('results__button_visible');
    } else if (buttonShowMore.classList.contains('results__button_visible')) {
      buttonShowMore.classList.remove('results__button_visible');
    }
    localStorage.setItem('articles', JSON.stringify(articles));
    newsCardList.renderResults();
    document.querySelector('.preloader').classList.toggle('preloader_visible');
    newsCardList.showBlockResults();
    newsCardList.hideRenderError();
  } else {
    newsCardList.hiddenBlockResults();
    newsCardList.showRenderError();
    document.querySelector('.preloader').classList.toggle('preloader_visible');
  }
}

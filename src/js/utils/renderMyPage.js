import NewsCard from '../components/NewsCard';
import MainApi from '../api/MainApi';
import NewsCardList from '../components/NewsCardList';

const newsCardList = new NewsCardList(document.querySelector('.content'));
const mainApiUrl = 'https://api.kain-news.ru';
const mainApi = new MainApi(mainApiUrl);

export default async function renderMyPage() {
  const articles = await mainApi.getArticles();
  document.querySelector('#name').textContent = localStorage.getItem('name');
  document.querySelector('#count').textContent = articles.length;
  console.log(articles);
  const keywords = articles.reduce((prevVal, elem) => {
    if (!prevVal[elem.keyword]) {
      // eslint-disable-next-line no-param-reassign
      prevVal[elem.keyword] = 1;
    } else {
      // eslint-disable-next-line no-param-reassign
      prevVal[elem.keyword] += 1;
    }
    return prevVal;
  }, {});
  const newKeywords = [];
  Object.keys(keywords).forEach((key) => {
    newKeywords.push({ [keywords[key]]: key });
  });
  newKeywords.sort((a, b) => Object.keys(b)[0] - Object.keys(a)[0]);
  if (newKeywords.length === 0) {
    document.querySelector('.my-page-main__description').innerHTML = '<h2 class="my-page-main__descrObject.values(newKeywords[0])[0]';
  } else if (newKeywords.length === 1) {
    document.querySelector('.my-page-main__description').innerHTML = `<h2 class="my-page-main__description">По ключевому слову: <span class="my-page-main__keyword">${Object.values(newKeywords[0])[0]}</span>.</h2>`;
  } else if (newKeywords.length === 2) {
    document.querySelector('.my-page-main__description').innerHTML = `<h2 class="my-page-main__description">По ключевым словам: <span class="my-page-main__keyword">${Object.values(newKeywords[0])[0]}</span>, <span class="my-page-main__keyword">${Object.values(newKeywords[1])[0]}</span>.</h2>`;
  } else if (newKeywords.length === 3) {
    document.querySelector('.my-page-main__description').innerHTML = `<h2 class="my-page-main__description">По ключевым словам: <span class="my-page-main__keyword">${Object.values(newKeywords[0])[0]}</span>, <span class="my-page-main__keyword">${Object.values(newKeywords[1])[0]}</span> и <span class="my-page-main__keyword">${Object.values(newKeywords[2])[0]}</span>`;
  } else if (newKeywords.length > 3) {
    document.querySelector('.my-page-main__description').innerHTML = `<h2 class="my-page-main__description">По ключевым словам: <span class="my-page-main__keyword">${Object.values(newKeywords[0])[0]}</span>, <span class="my-page-main__keyword">${Object.values(newKeywords[1])[0]}</span> и <span class="my-page-main__keyword">${newKeywords.length - 2} другим.`;
  }
  document.querySelector('.content').classList.add('content_visible');
  articles.forEach((elem) => {
    const data = {
      _id: elem._id,
      title: elem.title,
      urlToImage: elem.image,
      description: elem.text,
      publishedAt: elem.date,
      source: { name: elem.source },
      link: elem.link,
    };
    const card = new NewsCard(data, elem.keyword);
    newsCardList.addCard(card.getCard());
  });
  newsCardList.renderResults();
  Array.from(document.querySelectorAll('.card')).forEach((card) => {
    card.querySelector('.card__icon').classList.add('card__delete-icon');
  });
}

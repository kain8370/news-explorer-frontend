import NewsCard from '../components/NewsCard';
import NewsCardList from '../components/NewsCardList';

const newsCardList = new NewsCardList(document.querySelector('.results__container'));

export default function handlerShowMore() {
  const articles = JSON.parse(localStorage.getItem('articles'));
  articles.splice(0, 3).forEach((elem) => {
    const card = new NewsCard(elem, localStorage.getItem('keyword'));
    newsCardList.addCard(card.getCard());
  });
  localStorage.setItem('articles', JSON.stringify(articles));
  newsCardList.showMore();
}

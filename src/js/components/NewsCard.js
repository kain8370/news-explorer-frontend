export default class NewsCard {
  constructor(article, keyword) {
    this.source = article.source.name;
    this.description = article.description;
    this.title = article.title;
    this.url = article.url;
    this.urlToImage = article.urlToImage;
    this.keyword = keyword;
    this.date = article.publishedAt;
    if (article._id) {
      this._id = article._id;
    }
  }

  getCard() {
    return `<article class="card" data-keyword="${this.keyword}" data-id="${this._id ? this._id : null}">
            <span class="card__icon"></span>
            <span class="card__delete-message">Убрать из сохранённых</span>
            <span class="card__login-message">Войдите, чтобы сохранять статьи</span>
            <span class="card__keyword card__keyword_visible">${this.keyword}</span>
            <img class="card__image" src="${this.urlToImage}" alt="Картинка к статье">
            <a class="card__content" href="${this.url}" target="_blank">
              <p class="card__date">
                ${this.date.slice(0, 10)}
              </p>
              <h3 class="card__title">
                ${this.title}
              </h3>
              <p class="card__text">
                ${this.description}
              </p>
              <p class="card__source">${this.source}</p>
            </a>
          </article>`;
  }
}

export default class NewsCardList {
  constructor(container) {
    this.container = container;
    this.cards = [];
    this.notFound = document.querySelector('.not-found');
    this.preloader = document.querySelector('.preloader');
    this.results = document.querySelector('.results');
    this.button = document.querySelector('results__button');
    this.notFound = document.querySelector('.not-found');
  }

  renderResults() {
    this.cards.forEach((card) => {
      this.container.insertAdjacentHTML('beforeEnd', card);
    });
    this.cards = [];
  }

  renderLoader() {
    this.preloader.classList.toggle('preloader_visible');
  }

  showRenderError() {
    this.notFound.classList.add('not-found_visible');
  }

  hideRenderError() {
    this.notFound.classList.remove('not-found_visible');
  }

  showMore() {
    this.renderResults(this.cards);
    this.cards = [];
  }

  showBlockResults() {
    this.results.classList.add('results_visible');
  }

  hiddenBlockResults() {
    this.results.classList.remove('results_visible');
  }

  addCard(card) {
    this.cards.push(card);
  }
}

export default class NewsApi {
  constructor(options) {
    this.url = options.url;
    this.apiKey = options.apiKey;
    this.days = 7;
    this.date = new Date();
  }

  getNews() {
    return fetch(`${this.url}/everything?q=${document.querySelector('.search__form-input').value}&apiKey=${this.apiKey}&from=${this._getDateFrom7()}&to=${this._getDateNow()}&pageSize=100`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .then((res) => {
        localStorage.setItem('articles', JSON.stringify(res.articles));
      });
  }

  _getDateFrom7() {
    const dtms = this.date.valueOf();
    const newdate = new Date(dtms - ((24 * 60 * 60 * 1000) * this.days));
    let yy = newdate.getFullYear();
    if (yy < 10) yy = `0${yy}`;
    let mm = newdate.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    let dd = newdate.getDate();
    if (dd < 10) dd = `0${dd}`;
    return `${yy}-${mm}-${dd}`;
  }

  _getDateNow() {
    let yy = this.date.getFullYear();
    if (yy < 10) yy = `0${yy}`;
    let mm = this.date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    let dd = this.date.getDate();
    if (dd < 10) dd = `0${dd}`;
    return `${yy}-${mm}-${dd}`;
  }
}

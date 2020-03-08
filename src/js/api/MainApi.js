export default class MainApi {
  constructor(url) {
    this.url = url;
  }

  signup(data) {
    const { name, email, password } = data;
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, email, password,
      }),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);
  }

  signin(data) {
    const { email, password } = data;
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password,
      }),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);
  }

  getUserData() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => res)
      .catch((err) => err);
  }

  createArticles(data) {
    const {
      image, link, date, title, source, text, keyword,
    } = data;
    return fetch(`${this.url}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        image, link, date, title, source, text, keyword,
      }),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);
  }

  getArticles() {
    return fetch(`${this.url}/articles`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => res)
      .catch((err) => err);
  }

  removeArticle(_id) {
    return fetch(`${this.url}/articles/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);
  }
}

import MainApi from '../api/MainApi';
import Form from '../components/Form';

const mainApiUrl = 'https://api.kain-news.ru';
const mainApi = new MainApi(mainApiUrl);
const form = new Form();

export default async function signin(e) {
  e.preventDefault();
  const res = await mainApi.signin(form.getInfo(e.target));
  if (res.message) {
    form.setServerError(res.message);
  } else {
    localStorage.setItem('token', res.token);
    const userData = await mainApi.getUserData();
    localStorage.setItem('name', userData.name);
    document.location.href = '/';
  }
}

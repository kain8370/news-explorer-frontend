import MainApi from '../api/MainApi';
import Form from '../components/Form';

const mainApiUrl = 'https://api.kain-news.ru';
const mainApi = new MainApi(mainApiUrl);
const form = new Form();

export default async function signin(e) {
  e.preventDefault();
  try {
    const res = await mainApi.signin(form.getInfo(e.target));
    localStorage.setItem('token', res.token);
  } catch (err) {
    form.setServerError(err.message);
    return;
  }
  try {
    const userData = await mainApi.getUserData();
    localStorage.setItem('name', userData.name);
  } catch (err) {
    form.setServerError(err.message);
    return;
  }
  document.location.href = '/';
}

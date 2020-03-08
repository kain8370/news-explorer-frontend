import MainApi from '../api/MainApi';
import Form from '../components/Form';
import Popup from '../components/Popup';

const mainApiUrl = 'https://api.kain-news.ru';
const mainApi = new MainApi(mainApiUrl);
const form = new Form();
const popup = new Popup();

export default async function signup(e) {
  e.preventDefault();
  const res = await mainApi.signup(form.getInfo(e.target));
  if (res.message) {
    form.setServerError(res.message);
  } else {
    popup.clearContent(e.target.parentElement);
    popup.open(true);
  }
}

import MainApi from '../api/MainApi';
import Form from '../components/Form';
import Popup from '../components/Popup';

const mainApiUrl = 'https://api.kain-news.ru';
const mainApi = new MainApi(mainApiUrl);
const form = new Form();
const popup = new Popup();

export default async function signup(e) {
  e.preventDefault();
  try {
    await mainApi.signup(form.getInfo(e.target));
    popup.clearContent(e.target.parentElement);
    popup.open(true);
  } catch (err) {
    form.setServerError(err.message);
  }
}

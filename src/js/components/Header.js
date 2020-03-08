export default class Header {
  constructor() {
    this.header = document.querySelector('.header');
    this.logo = document.querySelector('.header__logo');
    [this.mainLink, this.savedArticlesLink] = document.querySelectorAll('.header__link');
    this.login = document.querySelector('.header__login');
    this.logout = document.querySelector('.header__logout');
  }

  render(props) {
    const { isLoggedIn, userName } = props;
    if (isLoggedIn) {
      if (this.login) {
        this.login.classList.add('header__login_hidden');
      }
      this.savedArticlesLink.classList.remove('header__link_hidden');
      this.logout.classList.remove('header__logout_hidden');
      this.logout.textContent = userName;
    } else {
      this.login.classList.remove('header__login_hidden');
      this.savedArticlesLink.classList.add('header__link_hidden');
      this.logout.classList.add('header__logout_hidden');
    }
  }
}

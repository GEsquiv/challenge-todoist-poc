import { Selector, t } from 'testcafe';

export class LoginPage {
  constructor() {
    this.email = Selector('#email');
    this.password = Selector('#password');
    this.login = Selector('.ist_button_red');
    this.iframe = Selector('._3ga5XTxZEFAiG-Q7KQfQnT');
  }

  async userLogin(user, password) {
    this.enterUser(user);
    this.enterPassword(password);
    this.finishTest();
  }

  async emptyPassword(user) {
    this.enterUser(user);
    this.finishTest();
  }

  async emptyUser(password) {
    this.enterPassword(password);
    this.finishTest();
  }

  async enterUser(user) {
    await t
      .switchToIframe(this.iframe)
      .typeText(this.email, user)
      .switchToMainWindow();
  }

  async enterPassword(password) {
    await t
      .switchToIframe(this.iframe)
      .typeText(this.password, password)
      .switchToMainWindow();
  }

  async finishTest() {
    await t
      .switchToIframe(this.iframe)
      .click(this.login)
      .switchToMainWindow();
  }
}
export default new LoginPage();

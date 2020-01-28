import { Selector, t } from 'testcafe';

export class HomePage {
  constructor() {
    this.loginButton = Selector('.xC29i');
  }

  async beginLogin() {
    await t
      .click(this.loginButton);
  }
}
export default new HomePage();

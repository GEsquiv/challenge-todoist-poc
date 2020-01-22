import { Selector, t } from 'testcafe';

export class HomePage {
  constructor() {
    this.loginButton = Selector('.xC29iLDJOfZeDm_x5o7DH');
  }

  async beginLogin() {
    await t
      .click(this.loginButton);
  }
}
export default new HomePage();

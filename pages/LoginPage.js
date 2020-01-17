import { Selector, t } from 'testcafe';

export class LoginPage{
    constructor(){
        this.email = Selector ('#email');
        this.password = Selector ('#password');
        this.login = Selector ('.ist_button_red')
        this.iframe = Selector ('._3ga5XTxZEFAiG-Q7KQfQnT')
    }

    async user_login(user, password){
        this.enter_user(user)
        this.enter_password(password)
        this.finish_test()
    }

    async empty_password(user){
        this.enter_user(user)
        this.finish_test()
    }

    async empty_user(password){
        this.enter_password(password)
        this.finish_test()
    }

    async enter_user(user){
        await t
        .switchToIframe(this.iframe)
        .typeText(this.email, user)
        .switchToMainWindow()
    }

    async enter_password(password){
        await t
        .switchToIframe(this.iframe)
        .typeText(this.password, password)
        .switchToMainWindow()
    }
    async finish_test(){
        await t
        .switchToIframe(this.iframe)
        .click(this.login)
        .switchToMainWindow()
    }
}
export default new LoginPage();
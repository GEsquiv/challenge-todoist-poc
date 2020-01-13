import { Selectors, Selector } from 'testcafe';

export class LoginPage{
    constructor(){
        this.email = Selector ('#email');
        this.password = Selector ('#password');
        this.login = Selector ('.ist_button_red')
    }

}
import { HomePage } from '../pages/TodoistHomePage';
import { LoginPage } from '../pages/LoginPage';
import {StartPage} from '../pages/StartPage'; 
require('dotenv').config();

const homePage = new HomePage();
const loginPage = new LoginPage();
const startPage = new StartPage();

fixture `Incorrect Login to Todoist`
    .page `https://todoist.com/`;

    test ('Incorrect password login test', async t => {
        await t
        .click(homePage.loginButton)
        .switchToIframe('._3ga5XTxZEFAiG-Q7KQfQnT')
        .typeText(loginPage.email, `${process.env.EMAIL_ADDRESS}`)
        .typeText(loginPage.password, `${process.env.INCORRECT_PASSWORD}`)
        .click(loginPage.login)
        .switchToMainWindow()
        .expect(startPage.inbox.exists).notOk()
    }); 
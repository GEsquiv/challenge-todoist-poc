import { HomePage } from '../pages/TodoistHomePage';
import { LoginPage } from '../pages/LoginPage'; 
import { StartPage } from '../pages/StartPage'
require('dotenv').config();

const homePage = new HomePage();
const loginPage = new LoginPage();
const startPage = new StartPage();

fixture `Add task to Todoist`
    .page `https://todoist.com/`;

    test ('Login test', async t => {
        await t
        .click(homePage.loginButton)
        .switchToIframe('._3ga5XTxZEFAiG-Q7KQfQnT')
        .typeText(loginPage.email, `${process.env.EMAIL_ADDRESS}`)
        .typeText(loginPage.password, `${process.env.PASSWORD}`)
        .click(loginPage.login)
        .switchToMainWindow()
        .click(startPage.addTask)
        .typeText(startPage.taskField, `${process.env.TASK_NAME}`)
        .click(startPage.finalizeTask)
        .expect(startPage.newTask.withExactText(`${process.env.TASK_NAME}`).exists).ok()
    }); 
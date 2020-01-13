import { HomePage } from '../pages/TodoistHomePage';
import { LoginPage } from '../pages/LoginPage'; 
import { StartPage } from '../pages/StartPage'
require('dotenv').config();

const homePage = new HomePage();
const loginPage = new LoginPage();
const startPage = new StartPage();
const taskArray = `${process.env.TASKS_NAMES}`.split(",");


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
        for (let i=0; i<taskArray.length; i++){
            if (await startPage.addTask.visible){
                await t
                .click(startPage.addTask)
                .typeText(startPage.taskField, taskArray[i])
                .click(startPage.finalizeTask)
            }
            else if (await startPage.finalizeTask.visible){
                await t
                .click(startPage.finalizeTask)
                .click(startPage.addTask)
                .typeText(startPage.taskField, taskArray[i])
                .click(startPage.finalizeTask)
            }

        await t
        .expect(startPage.newTask.withText(taskArray[i]).exists).ok() 

        }
        
    }); 
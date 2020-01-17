import HomePage  from '../pages/TodoistHomePage';
import LoginPage from '../pages/LoginPage';
import StartPage from '../pages/StartPage';
import * as data from '../utils/constants';


fixture `Login to Todoist`
    .page (data.URL);

    test('Login test', async t => {
        HomePage.begin_login()
        LoginPage.user_login(data.EMAIL, data.PASSWORD)
        await t
        .expect(StartPage.inbox.exists).ok()
    }); 

fixture `Incorrect Login to Todoist`
    .page (data.URL);

    test ('Incorrect password login test', async t => {
        HomePage.begin_login()
        LoginPage.user_login(data.EMAIL, data.INCORRECT_PASSWORD)
        await t
        .expect(StartPage.inbox.exists).notOk()
    }); 

fixture `Incorrect Login to Todoist`
    .page (data.URL);

    test('Incorrect email login test', async t => {
        HomePage.begin_login()
        LoginPage.user_login(data.INCORRECT_EMAIL, data.PASSWORD)
        await t
        .expect(StartPage.inbox.exists).notOk()
    });

fixture `Incorrect Login to Todoist`
    .page (data.URL);

    test('Blank email correct password', async t => {
        HomePage.begin_login()
        LoginPage.empty_user(data.PASSWORD)
        await t
        .expect(StartPage.inbox.exists).notOk()
    });

fixture `Incorrect Login to Todoist`
    .page (data.URL);

    test('Correct email blank password', async t => {
        HomePage.begin_login()
        LoginPage.empty_password(data.EMAIL)
        await t
        .expect(StartPage.inbox.exists).notOk()
    });
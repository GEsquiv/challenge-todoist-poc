import HomePage from '../pages/TodoistHomePage';
import LoginPage from '../pages/LoginPage';
import StartPage from '../pages/StartPage';
import * as data from '../utils/constants';


fixture`Login to Todoist`
  .page(data.URL);

test('Login test', async t => {
  HomePage.beginLogin();
  LoginPage.userLogin(data.EMAIL, data.PASSWORD);
  await t
    .expect(StartPage.inbox.exists).ok();
});

fixture`Incorrect Login to Todoist`
  .page(data.URL);

test('Incorrect password login test', async t => {
  HomePage.beginLogin();
  LoginPage.userLogin(data.EMAIL, data.INCORRECT_PASSWORD);
  await t
    .expect(StartPage.inbox.exists).notOk();
});

fixture`Incorrect Login to Todoist`
  .page(data.URL);

test('Incorrect email login test', async t => {
  HomePage.beginLogin();
  LoginPage.userLogin(data.INCORRECT_EMAIL, data.PASSWORD);
  await t
    .expect(StartPage.inbox.exists).notOk();
});

fixture`Incorrect Login to Todoist`
  .page(data.URL);

test('Blank email correct password', async t => {
  HomePage.beginLogin();
  LoginPage.emptyUser(data.PASSWORD);
  await t
    .expect(StartPage.inbox.exists).notOk();
});

fixture`Incorrect Login to Todoist`
  .page(data.URL);

test('Correct email blank password', async t => {
  HomePage.beginLogin();
  LoginPage.emptyPassword(data.EMAIL);
  await t
    .expect(StartPage.inbox.exists).notOk();
});

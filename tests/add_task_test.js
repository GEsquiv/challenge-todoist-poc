import HomePage from '../pages/TodoistHomePage';
import LoginPage from '../pages/LoginPage';
import StartPage from '../pages/StartPage';
import * as data from '../utils/constants';


fixture`Add task to Todoist`
  .page(data.URL);

test('Add task test', async t => {
  HomePage.beginLogin();
  LoginPage.userLogin(data.EMAIL, data.PASSWORD);
  StartPage.addTask(data.TASK_NAME);
  await t
    .expect(StartPage.newTask.withText(data.TASK_NAME).exists).ok();
});

fixture`Add tasks to Todoist`
  .page(data.URL);

test('Add multiple tasks', async t => {
  HomePage.beginLogin();
  LoginPage.userLogin(data.EMAIL, data.PASSWORD);
  for (let i = 0; i < 10; i++){
    await StartPage.addTask(`${data.TASK_NAME}_${i}`);
    await t
    .expect(await StartPage.newTask.withText(`${data.TASK_NAME}_${i}`).exists).ok();
  }
});

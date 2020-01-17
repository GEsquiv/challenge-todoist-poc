import HomePage  from '../pages/TodoistHomePage';
import LoginPage  from '../pages/LoginPage';
import StartPage from '../pages/StartPage'; 
import * as data from '../utils/constants';


fixture `Add task to Todoist`
    .page (data.URL);

    test ('Add multiple tasks', async t => {
        HomePage.begin_login()
        LoginPage.user_login(data.EMAIL, data.PASSWORD)
        StartPage.add_tasks(data.TASK_NAME)
        await t
        .expect(StartPage.newTask.withExactText("hey").exists).ok()
    }); 
import { Selector, t } from 'testcafe';

export class StartPage {
  constructor() {
    this.inbox = Selector('#filter_inbox');
    this.addTask = Selector('a').withExactText('Add task');
    this.taskField = Selector('.public-DraftStyleDefault-block');
    this.finalizeTask = Selector('.ist_button_red').withExactText('Add Task');
    this.newTask = Selector('.task_item_content_text');
    this.cancel = Selector('.cancel');
  }

  async addTask(taskName) {
    await t
      .click(this.addTask)
      .typeText(this.taskField, taskName)
      .click(this.finalizeTask)
      .click(this.cancel);
  }

  async addTasks(taskName) {
    await this.add_task(taskName);
    await this.add_task(taskName);
  }
}

export default new StartPage();

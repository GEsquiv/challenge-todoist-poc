import { Selector, t } from 'testcafe';

export class StartPage{
    constructor(){
        this.inbox = Selector('#filter_inbox')
        this.addTask = Selector ('a').withExactText('Add task')
        this.taskField = Selector ('.public-DraftStyleDefault-block')
        this.finalizeTask = Selector ('.ist_button_red').withExactText('Add Task')
        this.newTask = Selector('.task_item_content_text')
    }

    async add_task(taskName){
        await t
        .click(this.addTask)
        .typeText(this.taskField, taskName)
        .click(this.finalizeTask)
    }

    async add_tasks(taskName){
        await this.add_task(taskName)
        await this.add_task("hey")
    }
}

export default new StartPage();
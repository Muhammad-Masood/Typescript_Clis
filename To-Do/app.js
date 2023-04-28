import inquirer from "inquirer";
import chalk from "chalk";
let toDoTasks = [];
async function todo() {
    let run = true;
    while (run) {
        const choice = await inquirer.prompt([{
                name: "choose",
                type: "list",
                choices: ["Add New Task", "Delete Task", "Modify Task", "Exit"]
            }]);
        switch (choice.choose) {
            case "Add New Task":
                await addTask();
                break;
            case "Delete Task":
                await deleteTask();
                break;
            case "Modify Task":
                await modifyTask();
                break;
            case "Exit":
                run = false;
                break;
            default:
                break;
        }
    }
}
async function addTask() {
    const newTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Add new Task",
        }]);
    toDoTasks.push(` ${newTask.task}`);
    displayTasks();
}
async function deleteTask() {
    const delTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter Task Name"
        }]);
    for (const key in toDoTasks) {
        if (toDoTasks[key] == delTask.task) {
            const k = parseInt(key);
            toDoTasks.splice(k, 1);
            console.log("Task Deleted!");
            displayTasks();
        }
    }
}
async function modifyTask() {
    const searchTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter Task Name"
        }]);
    for (const key in toDoTasks) {
        if (toDoTasks[key] == searchTask.task) {
            const newTask = await inquirer.prompt([{
                    name: "newTask",
                    type: "input",
                    message: "Modify the Task"
                }]);
            // const k:number = parseInt(key);
            toDoTasks[key] = newTask.newTask;
            console.log("Task Modified!");
            displayTasks();
        }
    }
}
const displayTasks = () => {
    console.log(chalk.bgBlueBright(chalk.bold("All Tasks")));
    for (let index = 0; index < toDoTasks.length; index++) {
        console.log(toDoTasks[index]);
    }
};
todo();

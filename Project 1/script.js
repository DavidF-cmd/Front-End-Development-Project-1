
const register = document.getElementById('task');
const errorMssg = document.getElementById('error');
const button = document.getElementById('add_task');

button.addEventListener('click', (e) => { //parameters to avoid errors
    e.preventDefault();

    const messages = [];
    const task = register.value.trim();

    if (task === '') {
        messages.push('Task is required'); // this sends an error that a task is required

    } else if (task.length <= 5) {
        messages.push('Task must be longer than 5 characters'); // this sends an error that the task must be at least 5 characters
    }

    if (task.length >= 30) {
        messages.push('Task should be less than 30 characters'); // this sends an error that the task must be less than 30 characters
    }

    if (task.toLowerCase() === 'task') {
        messages.push('Task cannot be "task"'); // this prevents the task from being "task"
    }

    errorMssg.innerText = messages.join(', '); //this shous all the error messages grouped up

    if (messages.length > 0) { //this breaks the function, blocking the task from being added to the list if it fails to pass the valdiation
        return;
    }

    addTask();
});


function makeNewList() { //this function creates a new list, for aesthetic purposes
    const newList = document.createElement('ul');
    const listTitle = document.createElement('li');

    listTitle.textContent = 'Here is your to-do list:'; //appends the text to the top of the list
    newList.appendChild(listTitle);

    const openDiv = document.getElementById('list');

    document.body.insertBefore(newList, openDiv);

}

document.getElementById('list').addEventListener('click', makeNewList); //adds the text upon clicking the button

function addTask() {         //this is the function that adds the task to the list
    const taskName = document.getElementById('task');
    const newTaskItem = document.createElement('li');

    newTaskItem.textContent = taskName.value;

    document.getElementById('taskList').appendChild(newTaskItem); // here the task item is appended to the newly made list

    taskName.value = '';
}

document.getElementById('button')
    .addEventListener('click', addTask);

document.getElementById('taskList').addEventListener('click', addTask);

function remove() { //removes tasks from the list
    const taskList = document.getElementById('taskList');

    if (taskList.lastElementChild) { //checks for the last child appended to the list
        taskList.lastElementChild.remove();
    }
}

document.getElementById('removeButton')
    .addEventListener('click', remove);


function mark() { // this function makrs items as complete
    const tasks = document.getElementById('taskList');
    const complete = document.getElementById('complete');
    const firstTask = tasks.querySelector('li');

    if (firstTask) { // this conditional has been added to avoid problems in case there are no more items in the task list
        complete.appendChild(firstTask);
    }
}

document.getElementById('mark complete')
    .addEventListener('click', mark); // marks the task as compelted and moves it to its list



localStorage.setItem("taskList"); // local storage of list data



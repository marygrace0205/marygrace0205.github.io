console.log('hi');
console.log('hi again')

// 1. declare variable for input
const usernameInput = document.getElementById('username');
const submitBtn = document.getElementById('updateButton');
const greeting = document.getElementById('greeting');
const customMessageInput = document.getElementById('customMessage');
const message = document.getElementById('message');
const backgroundColor = document.getElementById('backgroundColor');

// 2. Wait for user to click the button
submitBtn.addEventListener('click', () => {
  // 3. Get the values
  const usernameValue = usernameInput.value;
  console.log(usernameValue);
  const customMessageValue = customMessageInput.value;
  console.log(customMessageValue);
  const backgroundColorValue = backgroundColor.value;


  // 4. Apply these values
  if (usernameValue.trim() !== '') {
        greeting.textContent = "Hello, " + usernameValue + "!";
    }

    if (customMessageValue.trim() !== '') {
        message.textContent = customMessageValue;
    }

    document.body.style.backgroundColor = "#" + backgroundColorValue;

});

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskValue = taskInput.value;

    if (taskValue.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskValue;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});

 

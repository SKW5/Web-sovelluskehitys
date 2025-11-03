// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
const ul = document.querySelector('ul');
// add your code here
for (let i = 0; i < todoList.length; i++) {
  const input = document.createElement("input");
  const label = document.createElement("label");

  input.type = "checkbox";
  input.id = todoList[i].id;
  input.checked = todoList[i].completed;

  label.textContent = todoList[i].task;
  label.htmlFor = input.id;

  const li = document.createElement("li");
  li.append(input, label);

  ul.append(li);

}

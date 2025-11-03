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

// add your code here

const ul = document.querySelector('ul');

for (let i = 0; i < todoList.length; i++) {
  const item = todoList[i];


  ul.insertAdjacentHTML("beforeend", `
      <li>
        <input type="checkbox" id="todo-${item.id}" ${item.completed ? 'checked' : ''}>
        <label for="todo-${item.id}">${item.task}</label>
        <button id="remove-${item.id}">Remove button</button>
      </li>
    `
  );
  const box = document.getElementById(`todo-${item.id}`);

  box.addEventListener('change', () => {
    item.completed = box.checked;
    console.log(todoList);
  })
  const remove = document.getElementById(`remove-${item.id}`);

  remove.addEventListener('click', () => {
    ul.removeChild(remove.parentElement);
  });
}

const add = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = document.querySelector('form input[type="text"]');

add.addEventListener('click', () => {
  dialog.showModal()
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  const newtitem = {
    id: todoList.length + 1,
    task: text,
    completed: false,
  };
  todoList.push(newtitem);
  console.log(todoList);
  input.value = '';
  dialog.close()
  const item = todoList[todoList.length - 1];
  ul.insertAdjacentHTML("beforeend", `
      <li>
        <input type="checkbox" id="todo-${item.id}" ${item.completed ? 'checked' : ''}>
        <label for="todo-${item.id}">${item.task}</label>
        <button id="remove-${item.id}">Remove button</button>
      </li>
    `
  );


})

"usce strict";

const todoList = JSON.parse(localStorage.getItem("list")) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
     <div>${dueDate}</div> 
    <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button" >Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  localStorage.setItem("list", JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-dueDate-input");
  const name = inputElement.value;
  const dueDate = dateInputElement.value;
  todoList.push({ name, dueDate });

  inputElement.value = "";
  renderTodoList();
}

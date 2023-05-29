const todoList = [
  {
    name: "make dinner",
    dueDate: "06-06-2024",
  },
  { name: "wash dishes", dueDate: "07-12-2924" },
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>    
    <button onclick="
    deleteTodo(${index})
    " class="delete-todo-button">Delete</button> `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document.querySelector(".js-button").addEventListener("click", addTodo);
}
function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });
  inputElement.value = "";
  renderTodoList();
}

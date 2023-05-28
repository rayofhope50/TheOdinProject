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

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
    <p>
      ${name} ${dueDate} 
      <button onclick="
        deleteTodo(${i})
      ">Delete</button> 
    </p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
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
  todoList.push(name);
  console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}

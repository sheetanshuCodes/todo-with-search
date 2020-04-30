const todoForm = document.querySelector(".addTodo");
const displayTodo = document.querySelector(".todoList");

const generateTodoTemplate = (todo) => {
  html = `<li>
  ${todo}
  <span class="delete">delete</span>
</li>`;
  displayTodo.innerHTML += html;
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoVal = todoForm.todoInput.value;
  generateTodoTemplate(todoVal);
  todoForm.reset();
});

displayTodo.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const searchBar = document.querySelector(".searchBar");

const filterTodo = (term) => {
  const TodoArray = Array.from(displayTodo.children);
  TodoArray.filter((todo) => !todo.textContent.includes(term)).forEach((todo) =>
    todo.classList.add("filtered")
  );
  TodoArray.filter((todo) => todo.textContent.includes(term)).forEach((todo) =>
    todo.classList.remove("filtered")
  );
};

searchBar.addEventListener("keyup", () => {
  filterTodo(searchBar.value.trim());
});

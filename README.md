# Simple JavaScript To-Do Application

This is a concise and functional JavaScript application designed to allow users to add, delete, and search through a to-do list. 

This project demonstrates the practical use of higher-order array methods, making it an ideal learning resource for beginner developers. While the focus has been on functionality over aesthetics (with minimal styling), it provides a great starting point for those interested in enhancing the user interface with their own CSS designs. Feel free to use and adapt this project as you see fit - no attributions necessary. Enhance your coding skills and let your creativity shine!

## Installation

Just clone or download the repo, then open the `index.html` file in your browser to see it in action.

## Structure

This project has a very basic structure:

- `index.html`: This is the main HTML document.
- `app.js`: This is the JavaScript file where the application logic lives.
- `style.css`: This file contains a few minimal styles.

### HTML

The HTML document (`index.html`) contains the following markup:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To Do</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <input type="text" class="searchBar" />
    <ul class="todoList">
      <li>
        eat
        <span class="delete">delete</span>
      </li>
      <li>
        sleep
        <span class="delete">delete</span>
      </li>
      <li>
        poo
        <span class="delete">delete</span>
      </li>
    </ul>
    <form class="addTodo">
      <input type="text" name="todoInput" placeholder="Add a new todo" />
      <input type="submit" />
    </form>
  </body>
  <script src="app.js"></script>
</html>
```

### JavaScript

The JavaScript file (`app.js`) is as follows:

```javascript
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
```

### CSS

This repository contains a `style.css` file. This is a minimal style sheet and it's open for your customization.

## How it works

- **Adding todos**: Enter a new to-do item in the input box in the form at the bottom of the page, and press the "submit" button. This will add the new item to the list

.
- **Deleting todos**: To delete a to-do item, simply click the "delete" link next to that item.
- **Searching todos**: You can search for specific to-do items by typing in the search bar at the top of the page. This will hide any to-do items that do not match your search.

## Contribution

Feel free to use and adapt this project as you see fit - no attributions necessary. If you make any substantial improvements, feel free to submit a pull request!

Happy coding!

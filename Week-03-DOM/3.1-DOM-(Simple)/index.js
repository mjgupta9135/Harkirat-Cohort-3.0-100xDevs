/*
 * DOM:- Document Object Model is a programming interface for web documents.
 * It represents the structure of a web page as a tree of objects.
 * DOM abstracts the structure of the document into a tree of objects,allowing scripts to manipulate the content and structure dynamically.
 * This abstraction enables more complex interactions and functionalities beyond just static HTML.
 */
let count = 0;
function addTodo() {
  const parent = document.querySelector("#content");
  const newDiv = document.createElement("div");
  newDiv.classList.add("todo-style", "todo-" + count);
  newDiv.innerHTML =
    '<div class="todo-head"> <input type="checkbox" class="check"><div class="extra"><h1 class="task' +
    count +
    '"></h1></div></div><div class="todo-btn><button><i class"fa-solid fa-trash-can icon"/></button></div>';
  parent.appendChild(newDiv);
  let inputVal = document.querySelector(".input-box").value;
  const task = document.querySelector(".task" + count);
  task.innerHTML = inputVal;
  console.log(newDiv);
  inputVal = "";
  count++;
}

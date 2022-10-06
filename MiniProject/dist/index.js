"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("input");
var form = document.querySelector("form");
var list = document.querySelector("#todolist");
var todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo) {
    var newLI = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);

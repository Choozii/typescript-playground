interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")!;
const input = document.getElementById("input")! as HTMLInputElement;
const form = document.querySelector("form");
const list = document.querySelector("#todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
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

function createTodo(todo: Todo) {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
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

form?.addEventListener("submit", handleSubmit);

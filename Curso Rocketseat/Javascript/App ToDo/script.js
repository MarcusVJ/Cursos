var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_Todos')) || [];

function renderTodos() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('A');

    var pos = todos.indexOf(todo);

    linkElement.setAttribute('onClick', 'deleteTodo(' + pos + ')');

    linkElement.setAttribute('href', '#');
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var text = inputElement.value;
  todos.push(text);

  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_Todos', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;

renderTodos();

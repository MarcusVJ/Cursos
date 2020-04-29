window.addEventListener('load', start);

function start() {
  console.log('Aula04');
  console.log('Página totalmente carregada.');

  var nameInput = document.querySelector('#nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function preventSubmit(event) {
  event.preventDefault();
}

function countName(event) {
  var count = event.target.value;

  var span = document.querySelector('#nameLenght');
  span.textContent = count;
}

let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let inputName = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () => {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
});

function activateInput() {
  //ao apertar da telca enter, captura a string digitada no campo de input e
  //faz chamada de uma classe para incerção no array de nomes
  inputName.addEventListener('keyup', (event) => {
    let hasText = !!event.target.value && event.target.value.trim() !== '';

    if (!hasText) {
      clearInput();
      return;
    }
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      if (isEditing) {
        globalNamesEdit(event.target.value);
      } else {
        globalNamesInsert(event.target.value);
      }
      render();
      isEditing = false;
      clearInput();
    }
  });
  inputName.focus();
}

function preventFormSubmit(event) {
  let form = document.querySelector('form');
  //previne que ao clicar enter a página recarregue
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

function globalNamesInsert(newName) {
  globalNames = [...globalNames, newName];
}

function globalNamesEdit(newName) {
  globalNames[currentIndex] = newName;
}

function render() {
  function createDeleteButton(index) {
    var button = document.createElement('button');
    button.textContent = 'X';
    button.classList.add('deleteButton');
    //Ao clicar no botão de deletar, é pego o indice daquele nome e o mesmo
    //é deletado.
    button.addEventListener('click', () => {
      //globalNames = globalNames.filter((name, i) => {
      //if (i === index) {
      //  return false;
      //}
      //return true;

      //return i !== index;
      //});
      globalNames = globalNames.filter((_, i) => i !== index);
      render();
    });

    return button;
  }

  function createSpan(name, index) {
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;

    span.addEventListener('click', () => {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    });

    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];

    var li = document.createElement('li');

    var button = createDeleteButton(i);

    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

const clearInput = () => {
  inputName.value = '';
  inputName.focus();
};

window.addEventListener('load', () => {
  doFetch();
  doFetchAsync();

  executionDivisionPromise();
  executionDivisionPromiseAsyncAwait();
});

function executionDivisionPromise() {
  divisionPromise(12, 6)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log('falha na divisão: ' + error);
    });
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possivel dividir por zero');
    }
    resolve(a / b);
  });
}

async function executionDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}
function showData(data) {
  const user = document.querySelector('#user');

  user.textContent = data.login + ' ' + data.name;
}

function doFetch() {
  fetch('https://api.github.com/users/rrgomide')
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((erro) => {
      console.log('erro na requisição');
    });
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/rrgomide');
  const json = await res.json();

  console.log(json);
}

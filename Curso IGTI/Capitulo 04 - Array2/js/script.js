window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

function doSpread() {
  console.log('Spread (espalha dois ou mais vetores)');
  console.log('Ex.: [...vet1, ...vet2]');

  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  const marriedPeople = [...marriedWomen, ...marriedMen];
  console.log('Vetor de homens casados: ' + marriedMen);
  console.log('Vetor de mulheres casadas: ' + marriedWomen);
  console.log('Vetor concatenado: ' + marriedPeople);
}

function doRest() {
  console.log('Rest (concatena em um único vetor)');
  console.log('Ex.: Soma infinita');
  console.log(infiniteSum(1, 2));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

function doDestructuring() {
  console.log('Desconstructuring: ');

  const first = people.results[0];

  //repetitivo
  //const username = first.login.username;
  //const password = first.login.password;

  //usando desconstructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}

window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  console.log('Map (retorna somente os nomes e emails da lista)');
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
  console.log();
  return nameEmailArray;
}

function doFilter() {
  console.log('Filter (retorna somente os maiores de 50 anos)');
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

function doForEach() {
  console.log(
    'ForEach (trabalha um por um os objetos dentro de um array para algum tipo' +
      'de lógica)'
  );
  const mappedPeople = doMap();
  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  console.log('Reduce (retorna somente a soma de todas as idades do array)');
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);
}

function doFind() {
  console.log('Find (retorna somente o primeiro objeto com estado como MG)');
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

function doSome() {
  console.log(
    'Some (retorna se existe (true ou false) objeto com estado como AM)'
  );
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

function doEvery() {
  console.log('Every (retorna todos os objetos possuem nacionalidade "BR")');
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
}

function doSort() {
  console.log('Sort (retorna uma lista ordenada de objetos que começam com A)');
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

  console.log(mappedNames);
}

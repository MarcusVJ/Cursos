//Por: Marcus Vinicius de Jesus

let groupMembers = [
  {
    first: 'Marcus Vinicius',
    last: 'Jesus',
  },
  {
    first: 'Adriana',
    last: 'Muller',
  },
  {
    first: 'Ana Carolina',
    last: 'Jesus dos Santos',
  },
  {
    first: 'Ismael',
    last: 'Muller',
  },
  {
    first: 'Yvonne Anita',
    last: 'Muller',
  },
  {
    first: 'Stella Maris',
    last: 'Jesus',
  },
  {
    first: 'Maurício',
    last: 'Muller',
  },
];

window.addEventListener('load', () => {
  getGroupMembers();
  getFullName('Marcus', 'Vinicius', 'de', 'Jesus');
  onlyNumbersFrom('1234.3423 2423.233');
});

function getGroupMembers() {
  console.log('Exercício 01');

  let membersFullName = [];

  groupMembers = groupMembers.sort((a, b) => {
    return a.first.localeCompare(b.first);
  });
  groupMembers.forEach((member) => {
    membersFullName.push(member.first + ' ' + member.last);
  });

  console.log(membersFullName);
}

function getFullName(...theArgs) {
  console.log('Exercício 02');
  let sortedArgs = theArgs.join(' ');
  console.log(sortedArgs);
}

function onlyNumbersFrom(stringInput) {
  console.log('Exercício 04');

  let array = [];
  let stringFormated = undefined;

  array = Array.from(stringInput);
  array = array.filter((test) => {
    if (!isNaN(test) && test !== ' ') {
      return test;
    }
  });

  stringFormated = array.join('');

  console.log(stringFormated);
}

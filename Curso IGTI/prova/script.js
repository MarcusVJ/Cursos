/*
function teste13(array, newItem) {
  array.push(newItem);
  return array;
}

function teste132(array, newItem) {
  return (array = [...array, newItem]);
}
console.log(teste13([1, 2, 3], 4));
console.log(teste132([1, 2, 3], 4));
*/

/*
function teste3() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return array.map((i) => i ** 2);
}

console.log(teste3());
*/
/*
function teste1(a) {
  let x = 0;

  for (let i = 1; i <= a; i++) {
    x += 1;
    console.log(x);
  }

  return x;
}

console.log('R.: ' + teste1(6));
*/
function teste12(title, first, middle, last) {
  return `${title} ${first} ${middle} ${last}`;
}

console.log(teste12('Mr', 'Marcus', 'Vinicius', 'Jesus'));

'use strict';

console.log('teste');

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var ' + i);
  }
  i = 20;
  console.log(i);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let ' + i);
  }
  i = 20;
  console.log(i);
}

withVar();
withLet();

'use strict';
const removeZeros = a => {
  let s = a.findIndex(e => e !== 0);
  let r = a.slice(s).reverse();
  s = r.findIndex(e => e !== 0);
  return r.slice(s).reverse();
};

console.log('Start');

console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]), [9, 5, 0, 0, 0, 0, 2]);

console.log(removeZeros([1, 6, 0, 2]), [1, 6, 0, 2]);

const fruits = ['Яблоко', 'Груша', 'Слива'];
const filteredNumbers = [];

fruits.forEach(number => {
  if (number > value) {
    filteredNumbers.push(number);
  }
});
console.log(filteredNumbers);

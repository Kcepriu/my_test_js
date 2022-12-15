"use strict";

function startCount(start) {
  let count = start;

  return function() {    
    return count++;
  }
}

const nextElem = startCount(5);

console.log(nextElem());
console.log(nextElem());
console.log(nextElem());
console.log(nextElem());
console.log(nextElem());


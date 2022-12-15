'use strict';

function layersOfInheritance_moy(obj) {
  let count = 0;

  if (obj.__proto__ !== Object.prototype) {
    count += 1 + layersOfInheritance(obj.__proto__);
  }

  return count;
}

function layersOfInheritance(obj) {
  const prototype = Object.getPrototypeOf(obj);

  if (prototype === Object.prototype) {
    return 0;
  }

  return 1 + layersOfInheritance(prototype);
}

const obj = { a: 1 };
const obj2 = Object.create(obj);
const obj3 = Object.create(obj2);

console.log(layersOfInheritance({}), '=', 0);
console.log(layersOfInheritance(obj3), '=', 2);
console.log(layersOfInheritance(obj2), '=', 1);
console.log(layersOfInheritance(obj), '=', 0);
console.log(layersOfInheritance(new Date()), '=', 1);

console.dir(new Date());

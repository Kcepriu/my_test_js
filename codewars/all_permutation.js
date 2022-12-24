'use strict';

const arrPermutation = [];
const arrDirection = [];
const arrResult = [];

for (let i = 0; i < 4; i++) {
  arrPermutation[i] = i + 1;
  arrDirection[i] = -1;
}

let indexdMaxMobileElement = findMaxMobileElement(arrPermutation, arrDirection);
arrResult.push([...arrPermutation]);
let maxMobileElement = arrPermutation[indexdMaxMobileElement];

while (indexdMaxMobileElement > -1) {
  swapPlaces(
    arrPermutation,
    indexdMaxMobileElement,
    indexdMaxMobileElement + arrDirection[indexdMaxMobileElement],
  );
  swapPlaces(
    arrDirection,
    indexdMaxMobileElement,
    indexdMaxMobileElement + arrDirection[indexdMaxMobileElement],
  );

  arrResult.push([...arrPermutation]);

  indexdMaxMobileElement = findMaxMobileElement(arrPermutation, arrDirection);
  maxMobileElement = arrPermutation[indexdMaxMobileElement];

  changeDirection(maxMobileElement, arrPermutation, arrDirection);
}

function changeDirection(maxMobileElement, arrPermutation, arrDirection) {
  arrPermutation.forEach((element, index) => {
    if (element > maxMobileElement) {
      arrDirection[index] = -1 * arrDirection[index];
    }
  });
}

function swapPlaces(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function findMaxMobileElement(arrPermutation, arrDirection) {
  let indexdMaxMobileElement = -1;

  for (let i = 0; i < arrPermutation.length; i++) {
    const nextIndex = i + arrDirection[i];
    if (nextIndex < 0 || nextIndex >= arrPermutation.length) {
      continue;
    }
    if (arrPermutation[i] > arrPermutation[nextIndex]) {
      if (indexdMaxMobileElement === -1) {
        indexdMaxMobileElement = i;
      } else if (arrPermutation[i] > arrPermutation[indexdMaxMobileElement]) {
        indexdMaxMobileElement = i;
      }
    }
  }

  return indexdMaxMobileElement;
}

// console.log(findMaxMobileElement(arrPermutation, arrDirection));
console.log(arrResult);

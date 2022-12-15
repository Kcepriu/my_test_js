"use strict";

function sortArray(array) {
  const arrIndex = [];
  const arrSort = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      arrIndex.push(i);
      arrSort.push(array[i]);
    }
  }

  arrSort.sort((a, b) => a - b);

  for (let i = 0; i < arrIndex.length; i++) {
    array[arrIndex[i]] = arrSort[i];
  }

  return array;
}

console.log(sortArray([ 42, -16, -1, -44, 42, -31, 7, -24 ]), [ 42, -16, -31, -44, 42, -1, 7, -24 ]);

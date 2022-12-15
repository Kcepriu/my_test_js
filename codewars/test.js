"use strict";

function testArray(array) {
  for (let elem of array) {
    elem *= 2;
  }
}


function testArrayInc(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
}

let array = [1, 2, 3, 4, 5];

testArray(array);

console.log(array);


let array2 = [1, 2, 3, 4, 5];

testArrayInc(array2);

console.log(array2);

function createArray2D(row, column) {
  for (let i = 0; i < row; i++) {
    let col = '';    
    for (let j = 1; j < column; j++) {
      col =  col + `${i + 1}.${j + 1} `;
    }
    console.log(col);
  }  
}


console.log(createArray2D(5, 4));
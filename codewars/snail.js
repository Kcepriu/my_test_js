"use strict";

const DIRECTION = { 
  0: [0, 1],
  1: [1, 0],
  2: [0, -1],
  3: [-1, 0],
}
let curentDirection = 0;

function nextX(curentX) {
  return curentX + DIRECTION[curentDirection % 4][0];
}

function nextY(curentY) {
  return curentY + DIRECTION[curentDirection % 4][1];
}

const snail = function (array) {
  const length = array.length * array[0].length;
  const result = [];
  let curentX = 0;
  let curentY = 0;
  curentDirection = 0;
    
  
  for (let i = 0; i < length; i++) {
    // console.log(curentX, curentY, array[curentX][curentY]);
    result.push(array[curentX][curentY]);
    
    array[curentX][curentY] = undefined;

    if ((!array[nextX(curentX)]) || (!array[nextX(curentX)][nextY(curentY)])) {
      curentDirection++
    };
    
    curentX = nextX(curentX);
    curentY = nextY(curentY);    
  }
  return result;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log([1, 2, 3, 6, 9, 8, 7, 4, 5]);

console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
console.log([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);



// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

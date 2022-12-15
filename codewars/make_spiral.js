'use strict';

const DIRECTION = {
  0: [0, 1],
  1: [1, 0],
  2: [0, -1],
  3: [-1, 0],
};
let curentDirection = 0;

function nextX(curentX) {
  return curentX + DIRECTION[curentDirection % 4][0];
}

function nextY(curentY) {
  return curentY + DIRECTION[curentDirection % 4][1];
}

function initialyzeArray(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
  }

  return result;
}

function spiralize(n) {
  const result = initialyzeArray(n);

  const length = n * n;

  let curentX = 0;
  let curentY = 0;
  curentDirection = 0;

  for (let i = 0; i < length; i++) {
    result[curentX][curentY] = 1;

    array[curentX][curentY] = undefined;

    if (!array[nextX(curentX)] || !array[nextX(curentX)][nextY(curentY)]) {
      curentDirection++;
    }

    curentX = nextX(curentX);
    curentY = nextY(curentY);
  }

  return result;
}

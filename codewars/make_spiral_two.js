'use strict';

const DIRECTION = {
  0: [0, 1],
  1: [1, 0],
  2: [0, -1],
  3: [-1, 0],
};

function initialyzeArray(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result[i] = [];
  }
  return result;
}

function getNextPosition(curentPosition, curentDirection) {
  return [
    curentPosition[0] + DIRECTION[curentDirection % 4][0],
    curentPosition[1] + DIRECTION[curentDirection % 4][1],
  ];
}

function getNextPositionDot(curentPosition, curentDirection) {
  return [
    curentPosition[0] +
      DIRECTION[curentDirection % 4][1] -
      DIRECTION[curentDirection % 4][0],
    curentPosition[1] -
      DIRECTION[curentDirection % 4][1] -
      DIRECTION[curentDirection % 4][0],
  ];
}

function spiralize(n) {
  const result = initialyzeArray(n);

  const curentPosition = [0, -1];

  let curentDirection = 0; // Напрямок, куди йдемо
  let countTurn = 1; // кількість поворотів підряд
  let nextPosition = [0, 0];

  for (let index = 0; index < n * n * n; index++) {
    if (countTurn === 4) {
      break;
    }
    nextPosition = getNextPosition(curentPosition, curentDirection);

    if (
      nextPosition[0] < 0 ||
      nextPosition[0] > n - 1 ||
      nextPosition[1] < 0 ||
      nextPosition[1] > n - 1 ||
      result[nextPosition[0]][nextPosition[1]] !== undefined
    ) {
      curentDirection += 1;
      countTurn += 1;
      continue;
    }

    curentPosition[0] = nextPosition[0];
    curentPosition[1] = nextPosition[1];

    result[curentPosition[0]][curentPosition[1]] = 1;

    if (countTurn === 0) {
      nextPosition = getNextPositionDot(curentPosition, curentDirection);
      result[nextPosition[0]][nextPosition[1]] = 0;
    }

    countTurn = 0;
  }

  return result;
}

console.log(spiralize(5));

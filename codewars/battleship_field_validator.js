'use strict';

function validateBattlefield(field) {
  function getSizeBoat(row, column) {
    let size = 0;
    let direction;

    while (true) {
      size++;
      direction = getDirection(row, column);

      console.log(row, column);

      console.log('🚀 ~ direction', direction);

      field[row][column] = 2;

      if (direction[0] > 1) return 0;

      if (direction[0] === 0) return size;

      [row, column] = NextStep(direction, row, column);
    }

    return 0;
  }

  function getDirection(row, column) {
    const result = [];
    result[1] = stepDown(row, column);
    result[2] = stepRight(row, column);
    result[3] = stepDiagonalNext(row, column);
    result[4] = stepDiagonalPrev(row, column);

    result[0] = result[1] + result[2] + result[3] + result[4];

    return result;
  }

  function stepDown(row, column) {
    if (row + 1 >= 10) {
      return 0;
    } else {
      const result = field[row + 1][column] === 1 ? 1 : 0;
      field[row + 1][column] = 2;
      return result;
    }
  }

  function stepRight(row, column) {
    if (column + 1 >= 10) {
      return 0;
    } else {
      const result = field[row][column + 1] === 1 ? 1 : 0;
      field[row][column + 1] = 2;
      return result;
    }
  }

  function stepDiagonalNext(row, column) {
    if (row + 1 >= 10 || column + 1 >= 10) {
      return 0;
    } else {
      const result = field[row + 1][column + 1] === 1 ? 2 : 0;
      field[row + 1][column + 1] = 2;

      return result;
    }
  }

  function stepDiagonalPrev(row, column) {
    if (row + 1 >= 10 || column - 1 < 0) {
      return 0;
    } else {
      const result = field[row + 1][column - 1] === 1 ? 2 : 0;
      field[row + 1][column - 1] = 2;

      return result;
    }
  }

  function NextStep(direction, nexRow, nexColumn) {
    if (direction[1]) {
      nexRow++;
    } else {
      nexColumn++;
    }

    return [nexRow, nexColumn];
  }

  const fleet = [0, 4, 3, 2, 1];
  let sizeBoat = 0;

  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
      if (field[row][column] !== 1) {
        continue;
      } else {
        sizeBoat = getSizeBoat(row, column);

        fleet[sizeBoat]--;
        if (fleet[sizeBoat] < 0) return false;
      }
    }
  }

  return fleet[1] + fleet[2] + fleet[3] + fleet[4] === 0;
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]),
);

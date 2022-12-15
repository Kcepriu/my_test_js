'use strict';

function addToSet(objCheck, elem, num, type) {
  if (elem === 0) return false;

  if (objCheck[type + num].has(elem)) return false;

  objCheck[type + num].add(elem);

  return true;
}

function getNumSquar(row, column) {
  const nowRow = Math.trunc(row / 3);
  const nowColumn = Math.trunc(column / 3);

  return 2 * nowRow + nowRow + nowColumn;
}

function validSolution(board) {
  const objCheck = {
    r0: new Set(),
    r1: new Set(),
    r2: new Set(),
    r3: new Set(),
    r4: new Set(),
    r5: new Set(),
    r6: new Set(),
    r7: new Set(),
    r8: new Set(),

    c0: new Set(),
    c1: new Set(),
    c2: new Set(),
    c3: new Set(),
    c4: new Set(),
    c5: new Set(),
    c6: new Set(),
    c7: new Set(),
    c8: new Set(),

    s0: new Set(),
    s1: new Set(),
    s2: new Set(),
    s3: new Set(),
    s4: new Set(),
    s5: new Set(),
    s6: new Set(),
    s7: new Set(),
    s8: new Set(),
  };

  if (board.length != 0 && board[0].length != 9) return false;

  let elem = 0;
  let numSquar = 0;

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      elem = Number(board[row][column]);

      if (!addToSet(objCheck, elem, row, 'r')) {
        return false;
      }

      if (!addToSet(objCheck, elem, column, 'c')) {
        return false;
      }

      numSquar = getNumSquar(row, column);

      if (!addToSet(objCheck, elem, numSquar, 's')) {
        return false;
      }
    }
  }

  // for (const elem in objCheck) {
  //   console.log(elem, objCheck[elem]);
  // }

  return true;
}

// console.log(
//   validSolution([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9],
//   ]),
// );

console.log(
  validSolution([
    [8, 2, 6, 3, 4, 7, 5, 9, 1],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 6, 5, 8, 7, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [6, 5, 9, 1, 7, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [9, 4, 8, 7, 5, 1, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 8, 1, 5, 4],
  ]),
);
console.log('ddddddddddd');

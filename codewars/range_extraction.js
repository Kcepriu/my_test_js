'use strict';

function addToresultInterimArray(arr) {
  if (arr.length <= 2) return arr.join(',');
  return arr[0] + '-' + arr.at(-1);
}

function solution(list) {
  if (list.length < 2) return list.join('');

  let result = '';
  let interimArray = [list[0]];

  for (let i = 1; i < list.length; i++) {
    if (list[i] === list[i - 1] + 1) {
      interimArray.push(list[i]);
    } else {
      result += (result ? ',' : '') + addToresultInterimArray(interimArray);

      interimArray = [list[i]];
    }
  }
  if (interimArray.length) {
    result += (result ? ',' : '') + addToresultInterimArray(interimArray);
  }

  return result;
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]),
);

console.log('-6,-3-1,3-5,7-11,14,15,17-20');
console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]) === '-6,-3-1,3-5,7-11,14,15,17-20',
);

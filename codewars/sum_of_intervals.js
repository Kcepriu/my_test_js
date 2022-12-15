'use strict';

function sumIntervals(intervals) {
  function newPoint(x, right) {
    return { x, right };
  }

  const newArray = [];

  intervals.forEach(element => {
    newArray.push(newPoint(element[0], 0));
    newArray.push(newPoint(element[1], 1));
  });
  // ! wdswg
  // ? sdgsg

  newArray.sort((a, b) => {
    let result = a.x - b.x;
    if (result === 0) {
      result = a.right - b.right;
    }
    return result;
  });

  let count = 1;
  let sum = 0;

  for (let i = 1; i < newArray.length; i++) {
    if (count > 0) {
      sum += newArray[i].x - newArray[i - 1].x;
    }
    if (newArray[i].right) {
      count--;
    } else {
      count++;
    }
  }
  return sum;
}

console.log('sum');

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
);

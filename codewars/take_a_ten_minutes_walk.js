"use strict";

const DIRECTION = {
  n: [0, 1],
  s: [0, -1],
  e: [1, 0],
  w: [-1, 0],
}

function addArray(arrayFirst, arraySecond) {
  const result = [];
  for (let i = 0; i < arrayFirst.length; i++) { 
    result.push(arrayFirst[i] + arraySecond[i]);
  }
  return result;
}

function nextStep(curentPosition, direction) {
  return addArray(curentPosition, DIRECTION[direction]);
}

function isValidWalk(walk) {
  console.log(walk);
  if (walk.length != 10) return false;

  
  let curentPosition = [0, 0];

  walk.forEach(element => {
    curentPosition = nextStep(curentPosition, element);
  });
  
  return (curentPosition[0] === 0) && (curentPosition[1] === 0);
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// console.log(DIRECTION['s']);


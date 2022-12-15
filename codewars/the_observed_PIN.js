"use strict";

const keypad = {
  "0": [0, 8],
  "1": [1, 2, 4],
  "2": [1, 2, 3, 5],
  "3": [2, 3, 6],
  "4": [1, 4, 5, 7],
  "5": [2, 4, 5, 6, 8],
  "6": [3, 5, 6, 9],
  "7": [4, 7, 8],
  "8": [5, 7, 8, 9, 0],
  "9": [6, 8, 9],
}

function nextStep(observed, result, arrayResult) { 
  const curentElem = observed[0];
  const arrayNumber = keypad[curentElem];
  
  let curentResult;
  
  for (const number of arrayNumber) {
    curentResult = result + number;
    if (observed.length > 1) { 
      nextStep(observed.slice(1, observed.lenhth), curentResult, arrayResult);
    } else {
      arrayResult.push(curentResult);
    }
  }

}

function getPINs(observed) {
  const arrayResult = [];
  nextStep(observed, "", arrayResult);
  return arrayResult;
}

console.log(getPINs("11"));

function factorial(n) {
  
  if (n === 1) { return n } else { return n * factorial(n - 1) }; 
}

console.log(factorial(5));

function findMatches(args, ...numbers) {
  const matches = []; // Don't change this line
  
  for (const number of numbers) {   
    
    if (args.includes(number)) {
      console.log("🚀 ~ number", number);
      matches.push(number);
    }
  }

  // Change code above this line
  return matches;
}

console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
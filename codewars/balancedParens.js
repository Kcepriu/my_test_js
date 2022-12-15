"use strict";
// const cacheResult = {
//   0: [""],
//   1: ["()"],  
//   2: ["()()", "(())"],
// }

// function addToArray(leftElem="", array, riggtElem="") {
//   return array.map(elem => leftElem + elem + riggtElem);
// }

// function gerArrayFromNum(num) {
//   if (cacheResult[num]) return cacheResult[num];

//   const result = [...addToArray("()", gerArrayFromNum(num - 1), ""), ...addToArray("", gerArrayFromNum(num - 1), "()"), ...addToArray("(", gerArrayFromNum(num - 1), ")")];
  
//   cacheResult[num] = result;
  
//   return result;
// }


"use strict";
const cacheResult = {
  0: new Set([""]),
  1: new Set(["()"]),  
  2: new Set(["()()", "(())"]),
}

function addLeftRightToSet(leftElem = "", set, riggtElem = "") {
  const resultSet = new Set();
  
  for (let value of set) {
    resultSet.add(leftElem + value + riggtElem);
  }
    
  return resultSet;
}

function doubleArray(num, set) {
  if (num % 2 != 0) return [];

  const result = [];
  
  for (let value of set) {
    result.push(value + value);
    console.log(value + value);
  }
    
  return result;
}

function concatTwoSet(leftSet, rightSet) {
  let resultSet = new Set();
  
  for (const leftElem of leftSet)
    for (const rightElem of rightSet) resultSet.add(leftElem + rightElem);
  
  return resultSet;
}

function addToSet(setInto, setOutput) {
  for (const elem of setOutput) setInto.add(elem);
}

function getSetFromNum(num) {
  if (cacheResult[num]) return cacheResult[num];

  let resultSet = new Set(addLeftRightToSet("(", getSetFromNum(num - 1), ")"));

  for (let i = 1; i < num; i++) {
    const setLeft  = getSetFromNum(i);
    const setRight = getSetFromNum(num - i);

    addToSet(resultSet, concatTwoSet(setLeft, setRight));
  }
  
  cacheResult[num] = resultSet;
  
  return resultSet;
}

function balancedParens(n) {
  return [...getSetFromNum(n).keys()];  
}


//  console.log(balancedParens(3).sort());

//  console.log(["((()))", "(()())", "(())()", "()(())", "()()()"]);


// console.log(balancedParens(4).sort());

// console.log(["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"].sort());

// const test = ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"];

console.log(balancedParens(80));

'use strict';

function newresultObj() {
  return {
    strLeft: '',
    strRight: '',
    countOpen: 0,
    countClose: 0,
  };
}

const fixParentheses = str => {
  const resultObjLeft = newresultObj();
  const resultObjRight = newresultObj();

  addLeft(str, resultObjLeft);

  let result = resultObjLeft.strLeft + str;

  addRight(result, resultObjRight);

  result = result + resultObjRight.strRight;

  return result;
};

function addLeft(str, resultObj) {
  for (const elem of str) {
    step(elem, resultObj);
  }
}

function addRight(str, resultObj) {
  for (let i = str.length - 1; i >= 0; i--) {
    step(str[i], resultObj);
  }
}

function step(elem, result) {
  if (elem === '(') {
    result.countOpen++;
  } else {
    result.countClose++;
  }

  if (result.countOpen > result.countClose) {
    result.strRight += ')';
    result.countClose++;
  }

  if (result.countOpen < result.countClose) {
    result.strLeft += '(';
    result.countOpen++;
  }
}

console.log(fixParentheses('))))(()('));

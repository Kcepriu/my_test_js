"use strict";

function encodeElement(elem) {
  if (elem === "R") return 1
    else if (elem === "G") return 3
    else return 4    
}


function newColor(num1, num2) {
  let result = 0;
  
  switch (encodeElement(num1) + encodeElement(num2)) {
    case 1:
      result = "R";
      break;
    case 2:
      result = "R";
      break;
    case 3:
      result = "G";
      break;
    case 4:
      result = "B";
      break;    
    case 5:
      result = "G";
      break;
    case 6:
      result = "G";
      break;
    case 7:
      result = "R";
      break;
    case 8:
      result = "B";
      break;
  }

  return result;
}

function nexColorWithThree(arr, i) {
  const rgb = arr.slice(i - 2, i + 1);  
  const elementCache = cache.get(rgb);

  if (elementCache != undefined) {      
    return elementCache
  };    

  let result = "";
  
  if (arr[i - 2] === arr[i - 1] && arr[i - 1] === arr[i]) result = arr[i]
  else if (arr[i - 2] !== arr[i - 1] && arr[i - 1] !== arr[i] && arr[i - 2] !== arr[i]) result = arr[i - 1]
  else if (arr[i - 2] === arr[i - 1]) result = arr[i];
  else if (arr[i - 1] === arr[i]) result = arr[i - 2]
  else if (arr[i - 2] === arr[i]) result = newColor(arr[i - 2], arr[i - 1]);
  else result = "ERROR";

  const bgr = arr[i] + arr[i - 1] + arr[i - 2];
  cache.set(rgb, result);
  cache.set(bgr, result);

  return result;
}

function nextColor(arr) {
  let result = "";
  
  while (true) {
    if (arr.length === 2) {
      return newColor(arr[0], arr[1]);
    } else if (arr.length < 2) {
      return arr;
    }
    
    result = "";
    for (let i = 2; i < arr.length; i++) {
      result += nexColorWithThree(arr, i);
    }
    arr = result;    
  }
}

const cache = new Map();

function triangle(row) {  
  return nextColor(row);
}


// console.log(triangle("RB"));
// console.log(triangle("RBRGBRBGGRRRBGBBBGG"),'G');
// console.log(triangle("RRR"), "R");
// console.log(triangle("RGBG"), "B");
// console.log(triangle("RBRGBRB"), "G");
// console.log(triangle("BBRR"));

console.log(triangle("GBGBGRBRGBGGGGGBRBRGGBRGBGBGGBBBGGRRGGBBBGBGBGGGGRBBBBRGGGRGGGRGGBRRGBRRBRRRRRBBGGBGBGBRRRRGBGGGBGGGRBGRRRRBGBGBGBRBGBGRBGGGGRRGRRGBGGBGBRGGBBRRRGBGRGRGGRBGGBGRRBRBRBBGRGBRRBBRBGRRGRGBRBBRRGRBGRRBGRGBRRGGBBBRRRRGRBBRBGBGGGBBGGRBRGBRRRGRBBGGBRBBGBRGRBGGGGGRRGRGRGBGBGGBGRGRGRBBBBRGBRGGGRBGRGGGGBRRGGGRGBBRRRRBRRRBRGGGBGGBRGBGRRRRGBBBRGBBBRBRBRRRBGBGGGRRGGBBRGRRGRBGRRGRGRRGGRBBRBRBRRBBBRBBRRRBBBBRGBGRBGGRRBRBRGRGRBGBRRBGRRRBGBRRRRRRBRGRBRGBRBBBBGRRRBRBRBBGRGBBRBBRGRBRGRBBBRBRRBGGBRRGRBRBGBGGBGRRBBRBBRBBGGBBGGBRBRBGGBGRGGBGRGBGRBRGGGRGBBBRRRRBGGRGGBBBGBGBBGRGBGGRRBGBBBBRGBBRGBRBBGGRRGGBRRRGRRRRRGGGRRRRBGBRBGBBGBGGBRBRBBBBGBGBGBBRGGGGGBRGRGBBGRBBGGRGRGBGGBBRBBBRBGBRRGBRBGRBRGGGGGGBGBGGRRRBGRBRGBBGGGGRRGBBGRBRRBBRGGGRRGGRBRGRGBRGBRGBBBBGRBGRGGGRRGBRRRGRRRRRGRBRBRGGBRRRGRBBRGBBBBBGGGRRRBRGGRGRRGBRBBRGBBRRBRGGGGBGGRRGBGGBRGBBBBGBBGGBBRRBRBRBGRRRBBRBGGBBRBBGRGGRRRRRBBBRBRRRBRBGRBGBGBGRGRBRBRRBBRBGRRGRGBBRRBBGBBBRRGGBGBRGGBGBRBBGGGGGGGRBRGRGBBRBRGRRRRRBRBRBGGGGRRGRGRBBBGBBGGRRRBRRBGRBBBBGBBBRRBGGRRBRBBRRGBRBBBBRRGBRRGRGRGRBRRGRGGRBGRBBRRGRBBBGRGBGBGGRBRRGBGBBBRRGBGRRGGBRRBBBBGRBBRGBBGRRRGRRRGRGBBGBGBRGRGGGBGBRRRRGBRBGGGRBRGRBRRBRBBBBGBRBRRRRRBRGRBGGBRGGBRBBBGBBBRGBGGRRGRBRBBRRRBRRRRBBGRGRRRGBBGBBRRGGBRRGGGBBRRBGGGGRGRRRBBRGBRBGRRBGBBBRRRRGBBBGGGGGGBRBGRGBGGRGGRGGRRRGBGRGBGGBGBGRRRBGGBGBBGRBBGRRGRGRBBBRRRBBRBRBBBGRRBRGGRBBRRRBRGBRBBGGGBGBRRRGRGGBGBGGGRRBGBRBBBGGGGRGGGGBRRGRBRGGGBBRGGRGGBBRRRBRBBRRBRBBBRGBBBGGGRGGGBRRBRBRGRGRBRRBRRRRRGRBBBBBBBBGRRGGRRRBBBBBGRRRGBBRRGGGRGRGGRBGBBGRBRBBGGBBBGRBGBRGBGBRBBGGGBGGBRRGGGBBGBRGBBBBBRBGBRGGGBGBBBRBRBGRRRRRGGBBBBRRGBGRRGGGRRGRGBBRBGRGRRGGBGBRBRGRBBRGGBRBRGGBBBGBBBGBRBRBBBRGRGRBGBGRBRRBRBRBRGBBBGBGGGBRRGBGBGBRBBGRBRBRRRRBGRRRGGGRRGBGGBRGRRGRRBRBGBRRBBBRRGGGBBRGRGGGRBBBBBGRRRGGGRRBGBGRGGRRGGGBBGBBRBBGRRRGGBRRGRBBBBRGGBRRGRBBRGRRBRGRGRBBGRGGBBGRGBRBRGGRGGBBBGRRGGBRRGGRBGRGRRBRBGBBGRRGRBGRBBRGRGGBBRRBRGBBRGGGBBRBBBRGBGRBGBGGBBBBGRGRGRBRGBBGRRRGBGGBGBGRGRBBGGGRRBGRRBGGRBGBGRBGGGGRBRBRGGRBRRBGGGGBBBGRRRGBGBBBRRRRBBRRGRRBGGGBGBBRRBBRBGGGRRBGRGGRRBBGGGGBRRRBBRBBBBGGGRGGRBGGRBGGRBBGRGGRBGBGGBGGRGRRRBBRGGGGBGRGRBRBGRBBRGGRBBRBRGRGGBRGGRRRGGBGBRRGRGGGGGGBGRRBGRGBGRRGGGBRGBRGGGBBBGBBRGBGGRRRBGBBGRGGRBBGBRBGBGRRBBGBRBRBGRBGBBGBGBGBRBGBGBGBRRBBBBBGRBRBRRBBBBGRRRBRBBGBGBRRRBGGGGRGGRRBRBGRGRBBRRRRBRRGGGGGBRRRGGGRGRRRGRGBBRBRGBGRGGRGRRGGBBRRBRGRBGRBGBGBGRGBGRRGRBRRRRRGRBBBBRRBBBGBGBBGGRBGBGRGBGRRBRGGBBRBRGBRGBGBBRBGRBBRBRGRRRRBGBBGGRGBBBBRBGGRGBRBGRBRBBBGGGGRBRRGRBBRBGGGRBBBBBRGRRBGBRBGRBGGGRBGGRRRRGGBGBBRRRBBBBRRRGRBGRBGRGRGBBBRBRBBBBGRRBBBGGGRGRBGGBGGGBBBBGBRRGGGRRBRRGRGRGBRGRGBGRGGBGRBGGGBBGRRRGRBGBGBBGBGBGGRRRRRBGGBGBBRRRGRRGRBRRGBGBRGGBGRBRBBBRRRBRRRGRBRGRBGGBBGRGGRRRGBRGRBRBRBBGRRRGRRRGBGBBGRBGRRGBRGGRRRGGGBBRBGRRRRGRGBGBBGBRGGBBRRGGBGBGGRRRRGGBGGBRGBBGGGGBRRRGBBGGRBBBBBGRGGRRBGRRBRRBRBRBBRBBBRRRGBBBGGBRGGRGGGRRGRRBRBGBRBBGRGBBGGGBGGGGGRGRGGRRBRBGRBGGRRRRGBGBGRGRRGBBGBBGGBRRBRGBRGBRRBRRGRRBRBGGRBGRGGRRRGGGBRRBRBBBGBBBRGGGRRBBGGBGRBGRBRGBBGRRGBBBRBRBRBGGGBGGGGBRGBBGBGRBRRGRGRGGGGGGRRBBGBGBGBBRRGRRBRBRRRGGBGBRRGGBRRBBRGRBGGRRRBGB"));


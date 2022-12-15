"use strict";
function newColor(num1, num2) {
  let result = 0;
  
  switch (num1 + num2) {
    case 1:
      result = 1;
      break;
    case 2:
      result = 1;
      break;
    case 3:
      result = 3;
      break;
    case 4:
      result = 4;
      break;    
    case 5:
      result = 3;
      break;
    case 6:
      result = 3;
      break;
    case 7:
      result = 1;
      break;
    case 8:
      result = 4;
      break;
  }

  return result;
}

function getEncodeArr(arr) {
  return arr.map(elem => {
    if (elem === "R") return 1
    else if (elem === "G") return 3
    else return 4
  }  )
}

function getDecodeArr(arr) {
  return arr.map(elem => {
    if (elem === 1) return "R"
    else if (elem === 3) return "G"
    else return "B"
  })
}

function getCache(arr, i) {
  const rgb = arr[i - 2] * 100 + arr[i - 1] * 10 + arr[i];
  const bgr = arr[i] * 100 + arr[i - 1] * 10 + arr[i-2];
  const elementCache = cache[rgb];

}
function nexColorWithThree(arr, i) {
  const rgb = arr[i - 2] * 100 + arr[i - 1] * 10 + arr[i];
  const bgr = arr[i] * 100 + arr[i - 1] * 10 + arr[i-2];
  const elementCache = cache[rgb];

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

  cache[rgb] = result;
  cache[bgr] = result;

  return result;
}

function nextColor(arr) {
  if (arr.length === 2) {
    arr[0] = newColor(arr[0], arr[1]);       
    arr.splice(1, arr.length-1);
    return;

  } else   if (arr.length < 2) {
    return;
  }
    
  for (let i = 2; i < arr.length; i++) {
    arr[i - 2] = nexColorWithThree(arr, i);    
  }

  arr.splice(arr.length - 2, 2);

  nextColor(arr);
}

const cache = {};

function triangle(row) {
  // console.log(row);
  
  const encodeArr = getEncodeArr(row.split(''));
  
  nextColor(encodeArr);

  return getDecodeArr(encodeArr).join("");
}


// console.log(triangle("RB"));
// console.log(triangle("RBRGBRBGGRRRBGBBBGG"),'G');
// console.log(triangle("RRR"), "R");
// console.log(triangle("RGBG"), "B");
console.log(triangle("RBRGBRB"), "G");
// console.log(triangle("BBRR"));


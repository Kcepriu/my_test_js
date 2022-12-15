"use strict";

function productDigit(num) {
  if (num < 10) {
    return num;
  }

  let latDigit = num % 10;
  
  return latDigit * productDigit(Math.trunc(num / 10));
}

function persistence1(num) {
  let count = 0;
  
  while (num >= 10) {
    count++;
    num = productDigit(num);
  }

  return count;
}

function persistence(num) {
  let count = 0;

  let num_str = num.toString();
  
  while (num_str.length > 1) {
    count++;
    num_str = num_str.split('').reduce((num_str, curent) => num_str * Number(curent), 1).toString();;
  }
  
  return count;
}


console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
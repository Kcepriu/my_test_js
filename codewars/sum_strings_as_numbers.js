"use strict";

function toNumber(val) {  
  val = val === undefined ? 0 : val;

  return Number(val);
}

function sumStrings1(a,b) { 
  const array_a = a.split('').map(Number).reverse();
  const array_b = b.split('').map(Number).reverse();
  
  let array_result = [];
  const max_index = Math.max(array_a.length, array_b.length)-1;

  let remainder = 0;
  let sum = 0;

  for (let i = 0; i <= max_index; i++) {
    sum = remainder + toNumber(array_a[i]) + toNumber(array_b[i]);

    if (sum < 10) {
      array_result.push(sum);
      remainder = 0;
    } else {
      array_result.push(sum % 10);
      remainder = Math.trunc(sum / 10);
    }
  }
  
  if (remainder) {
    array_result.push(remainder);
  }

  array_result = array_result.reverse();
  let i = 0;
  while (array_result[i] === 0) {
    i++;
  }
  return array_result.slice(i).join('');
}

function sumStrings(a,b) { 
  const array_a = a.split('');
  const array_b = b.split('');
  let elem_a = 0;
  let elem_b = 0;
  
  let result = '';
  
  let remainder = 0;
  let sum = 0;

  do {
    elem_a = array_a.pop();
    elem_b = array_b.pop();

    sum = remainder + toNumber(elem_a) + toNumber(elem_b);    

    result = (sum % 10) + result;      
    remainder = (sum < 10) ? 0:1;

  } while ((elem_a !== undefined) || (elem_b !== undefined));
  
  if (remainder) {
    result = remainder + result;      
  }

  let i = 0;  
  while (result[i] === '0') {
    i++;
  }

  return result.slice(i);
}


console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605')); 1
                                                        //  81895336534324866

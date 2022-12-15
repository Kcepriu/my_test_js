'use strict';

function add13(code, start, end) {
  let newCode = code + 13;

  if (newCode > end) {
    newCode = newCode - end + start - 1;
  }

  return newCode;
}

function decodeRot(code) {
  let newCode = code;

  if (code >= 65 && code <= 90) {
    newCode = add13(code, 65, 90);
  }

  if (code >= 97 && code <= 122) {
    newCode = add13(code, 97, 122);
  }

  // console.log(
  //   code,
  //   newCode,
  //   String.fromCharCode(code),
  //   String.fromCharCode(newCode),
  // );

  return String.fromCharCode(newCode);
}

function rot13(str) {
  let result = '';
  for (let index = 0; index < str.length; index++) {
    // console.log(str[index], str.charCodeAt(index));

    result += decodeRot(str.charCodeAt(index));
  }

  return result;
}

console.log(rot13('EBG13 rknzcyr.'), 'ROT13 example.');
// console.log(rot13('rknzcyr.'), 'ROT13 example.');

// for (let index = 65; index < 125; index++) {
//   console.log(index, String.fromCharCode(index));
// }

//65-90
//97-122
// console.log(add13(114, 97, 122));

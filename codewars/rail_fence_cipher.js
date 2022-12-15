"use strict";
function getArrayIndex(lengthString, numberRails) {
  const arrayInd = [];
  
  for (let i = 0; i < numberRails; i++) {
    arrayInd[i] = [];
  };

  let ind = 1;
  let incr = 1;
  
  for (let i = 0; i < lengthString; i++) {
    arrayInd[ind-1].push(i);    
    ind += incr;      
    incr =  incr * ((ind > 1 && ind  < numberRails) ? 1: -1);
  }

  let result = [];
  for (const elem of arrayInd) {
    result = result.concat(elem);
  };

  return result;  
}


function encodeRailFenceCipher(string, numberRails) {
const arrayIndex = getArrayIndex(string.length, numberRails);

  let encodeString = "";
  for (const elem of arrayIndex) {
    encodeString += string[elem];
  }

  return encodeString;
}

function decodeRailFenceCipher(string, numberRails) {
  const arrayIndex = getArrayIndex(string.length, numberRails);
  const decodeArr = [];
  
  for (let i = 0; i < arrayIndex.length; i++) {
    decodeArr[arrayIndex[i]] = string[i];
  }

  return decodeArr.join('');
}


// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));

// console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) === "WECRLTEERDSOEEFEAOCAIVDEN");

console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));

console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3) === "WEAREDISCOVEREDFLEEATONCE");


'use strict';

function changeDirection(maxMobileElement, arrPermutation, arrDirection) {
  arrPermutation.forEach((element, index) => {
    if (element > maxMobileElement) {
      arrDirection[index] = -1 * arrDirection[index];
    }
  });
}

function swapPlaces(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function findMaxMobileElement(arrPermutation, arrDirection) {
  let indexdMaxMobileElement = -1;

  for (let i = 0; i < arrPermutation.length; i++) {
    const nextIndex = i + arrDirection[i];
    if (nextIndex < 0 || nextIndex >= arrPermutation.length) {
      continue;
    }
    if (arrPermutation[i] > arrPermutation[nextIndex]) {
      if (indexdMaxMobileElement === -1) {
        indexdMaxMobileElement = i;
      } else if (arrPermutation[i] > arrPermutation[indexdMaxMobileElement]) {
        indexdMaxMobileElement = i;
      }
    }
  }

  return indexdMaxMobileElement;
}

function codeChar(string) {
  const mapChars = new Map();
  const arrPermutation = [];
  const arrDecode = [];

  for (let i = 0; i < string.length; i++) {
    let key = mapChars.get(string[i]);

    if (key === undefined) {
      key = mapChars.size;
      mapChars.set(string[i], key);
      arrDecode.push(string[i]);
    }

    arrPermutation.push(key);
  }

  return { arrDecode, arrPermutation };
}
function decodeString(arrString, arrDecode) {
  let result = '';

  arrString.forEach(elem => {
    result += arrDecode[elem];
  });

  return result;
}

function decodeResults(arrResult, mapChars) {
  const result = [];
  arrResult.forEach(element => {
    result.push(decodeString(element, mapChars));
  });

  return result;
}

function permutations(string) {
  const { arrDecode, arrPermutation } = codeChar(string);

  const arrDirection = [];
  const arrResult = [];

  for (let i = 0; i < arrPermutation.length; i++) {
    // arrPermutation[i] = string[i];
    arrDirection[i] = -1;
  }

  let indexdMaxMobileElement = findMaxMobileElement(
    arrPermutation,
    arrDirection,
  );
  arrResult.push([...arrPermutation]);
  let maxMobileElement = arrPermutation[indexdMaxMobileElement];

  while (indexdMaxMobileElement > -1) {
    swapPlaces(
      arrPermutation,
      indexdMaxMobileElement,
      indexdMaxMobileElement + arrDirection[indexdMaxMobileElement],
    );
    swapPlaces(
      arrDirection,
      indexdMaxMobileElement,
      indexdMaxMobileElement + arrDirection[indexdMaxMobileElement],
    );

    arrResult.push([...arrPermutation]);

    indexdMaxMobileElement = findMaxMobileElement(arrPermutation, arrDirection);
    maxMobileElement = arrPermutation[indexdMaxMobileElement];

    changeDirection(maxMobileElement, arrPermutation, arrDirection);
  }

  return decodeResults(arrResult, arrDecode);
}

console.log(permutations('aabb'));

console.log(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);

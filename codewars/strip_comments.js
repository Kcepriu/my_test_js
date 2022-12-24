'use strict';

function solution(input, markers) {
  let arrayWords = input.split('\n');

  markers.forEach(marker => {
    let newArray = arrayWords.map(element => {
      return element.split(marker)[0].trim();
    });

    arrayWords = newArray;
  });

  return arrayWords.join('\n');
}

console.log(
  solution('apples, plums % and bananas\npears\noranges !applesauce', [
    '%',
    '!',
  ]),
);

"use strict";
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
  let array_town = [];
  let count_empty, count_fill;
  const height = nFloors * 2 - 1;

  for (let i = 1; i <= nFloors; i++) {
    count_empty = (height - (i * 2 - 1)) / 2;
    count_fill = height - 2 * count_empty;
    array_town.push(" ".repeat(count_empty) + "*".repeat(count_fill) + " ".repeat(count_empty));    
  }
 
  return array_town;
}

console.log(towerBuilder(6));
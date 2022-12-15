"use strict";

function cakes(recipe, available) {
  let counts = [];

  for (const elem in recipe) {
    if (available[elem]) {
      counts.push(Math.floor(available[elem] / recipe[elem])) ;
    }
    else {
      counts = [0];
      break;
    }
  }

  return Math.min(...counts);
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
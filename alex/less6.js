'use strict';

function test(x) {
  x.a = 1;
  return x;
}

var dd = {};
test(dd);
console.log(dd);

'use strict';

const reverse = a => a.map((e, i, a) => a[a.length - i - 1]);

console.log(reverse([1, 2, 3]));

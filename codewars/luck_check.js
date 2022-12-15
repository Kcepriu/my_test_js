'use strict';

function summStr(str) {
  return str.split('').reduce((sum, elem) => (sum += Number(elem)), 0);
}

function luckCheck(ticket) {
  if (!/^[0-9]+$/.test(ticket)) {
    throw 'dfssdgdsfg';
  }

  const center = Math.trunc(ticket.length / 2);

  const add = ticket.length % 2;

  const arr1 = ticket.slice(0, center);
  const arr2 = ticket.slice(center + add);

  return summStr(arr1) === summStr(arr2);
}

console.log(luckCheck('683s179'));
console.log(luckCheck('000000'));

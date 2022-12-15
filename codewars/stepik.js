function task2(k, n) {
  let result = '';
  for (let i = 1; i <= k; i++) {
    result = result + n + ' ';
  }
  return result.slice(0, -1);
}



function task3(k, n) {
  let result = '';
  
  for (let i = k; i <= n; i++) {
    result = result + i + ' ';
  }
  
  return result.slice(0, -1);
}

function task4(a, b) {
  let result = '';
  k = Math.max(a, b);
  n = Math.min(a, b);

  for (let i = k; i >= n; i--) {
    result = result + i + ' ';
  }
  
  return result.slice(0, -1);
}

function task9(n) { 
  let result=1;

  for (i = n; i > 0; i -= 2) {
    result *= i;
  }

  return result;
}

// console.log(task2(9, 5));
// console.log(task3(9, 16));
// console.log(task4(10, 6));
console.log(task9(7));
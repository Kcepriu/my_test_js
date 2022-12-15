function getString(n, k) {
  let string = "";
  
  for (let i = 1; i <= k; i++) {
    string += n + " ";
  }

  return string.slice(0, string.length - 1);
}

console.log(getString(3, 5));
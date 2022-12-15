function solution(a) {
  let visited = [];
  let curent_position = 0;
  let next_position;
  let max_position = a.length - 1;
  let result = -1;
  let count = 0;


  while (true) {
    console.log(curent_position, count);

    next_position = curent_position + a[curent_position];
    if (next_position < 0 || next_position > max_position) {
      result = count + 1;
      break;
    }
    
    if (visited[next_position]) {
      break;
    }
    
    visited[next_position] = true;
    
    curent_position = next_position;

    count++;
  }

  return result;

}


console.log(solution([1, 2, 2, -1]));

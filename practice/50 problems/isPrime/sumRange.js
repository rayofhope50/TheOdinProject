function range([start, finish]) {
  let result = [];
  if (start < finish) {
    for (let i = start; i <= finish; i++) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= finish; i--) {
      result.push(i);
    }
  }
  return result;
}
function sum(a) {
  let sum = a.reduce((tot, num) => tot + num, 0);
  return sum;
}

console.log(range([1, 10]));
console.log(range([5, 2, -1]));
console.log(sum(range([1, 10])));

const highAndLow = (numbers) => {
  let min = numbers.split(" ");
  console.log(min);
};

console.log(highAndLow("1 2 3 4 5")); // '5 1'
console.log(highAndLow("1 2 -3 4 5")); // '5 -3'
console.log(highAndLow("1 9 3 4 -5")); // '9 -5'
console.log(highAndLow("0 -214 542")); // '542 -214'

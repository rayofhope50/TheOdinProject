const squareDigits = (num) => {
  let numbers = num
    .toString()
    .split("")
    .map((e) => e * e)
    .join("");
  return numbers;
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581

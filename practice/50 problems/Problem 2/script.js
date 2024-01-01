function myFunction(x, y) {
  if (x % y === 0) {
    return x;
  } else {
    return x + 1;
  }
}

console.log(myFunction(1, 23));
console.log(myFunction(23, 23));
console.log(myFunction(7, 3));
console.log(myFunction(-5, 7));

// let result = 0;
// for (let i = 1; i <= 3; i = i + 1) {
//   console.log(i);
//   result = result + i;
// }
// console.log(result === 6);

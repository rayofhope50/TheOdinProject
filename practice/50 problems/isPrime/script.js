function myFunction(a, n) {
  let arr = [];
  for (let i = n; i <= a.length; i += n) {
    arr.push(a[i - 1]);
  }
  return arr;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(myFunction([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(myFunction([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));
// console.log(myFunction(-5, 7));

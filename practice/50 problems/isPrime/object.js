function myFunction(a, b) {
  let obj = {};
  a.forEach((value, index) => {
    obj[value] = b[index];
  });
  return obj;
}

console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(myFunction([1, "b"], ["a", 2]));
// console.log(myFunction(-5, 7));

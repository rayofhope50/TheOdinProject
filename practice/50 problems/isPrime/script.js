function myFunction(a) {
  return Object.keys(a);
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunction({ w: 15, x: 22, y: 13 }));
// console.log(myFunction(-5, 7));

function myFunction(a) {
  let result = Object.entries(a).reduce((obj, [key, val]) => {
    obj[val] = key;
    return obj;
  }, {});
  return result;
}

console.log(myFunction({ z: "a", y: "b", x: "c", w: "d" }));
console.log(myFunction({ 2: "a", 4: "b", 6: "c", 8: "d" }));
console.log(myFunction({ a: 1, z: 24 }));
// console.log(myFunction(-5, 7));

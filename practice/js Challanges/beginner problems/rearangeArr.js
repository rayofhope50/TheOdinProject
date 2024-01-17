function reverseArray(arr) {
  if (arr.length > 1) {
    const lastEl = arr.pop();
    arr.unshift(lastEl);
  }
  return arr;
}
function reverseArrayInPlace(arr) {
  if (arr.length > 1) {
    const lastEl = arr.pop();
    arr.unshift(lastEl);
  }
  return arr;
  // hello
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

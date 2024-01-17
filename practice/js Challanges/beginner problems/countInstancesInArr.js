function myFunction(a) {
  let result = {};
  for (let i = 0; i < a.length; i++) {
    if (result[a[i]]) {
      result[a[i]] += 1;
    } else {
      result[a[i]] = 1;
    }
  }
  return result;
}

console.log(myFunction([1, 2, 2, 3]));
console.log(myFunction([9, 9, 9, 99]));

function myFunction(a) {
  a.reduce((acc, val, i) => {
    acc[val];

    console.log(acc);
    console.log(val);
    console.log(i);
    return acc;
  }, {});
  return a;
}

console.log(myFunction([1, 2, 2, 3]));
console.log(myFunction([9, 9, 9, 99]));

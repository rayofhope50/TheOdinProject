let arr = [1, 2, 3, 4, 5];
function sumOfTripleEvents(arr) {
  //   let temp = arr.filter((arr) => arr % 2 === 1);
  //   let newTemp = temp.map((num) => num * 3);
  //   let result = newTemp.reduce((total, currentValue) => total * currentValue);
  //   return result;
  return arr
    .filter((arr) => arr % 2 === 1)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
console.log(sumOfTripleEvents(arr));

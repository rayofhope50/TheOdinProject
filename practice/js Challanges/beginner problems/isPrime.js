function myFunction(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function nextPrime(num) {
    if (isPrime(num) === false) {
      for (let i = num; ; i++) {
        if (isPrime(i)) {
          return i;
        }
      }
    } else return num;
  }

  return nextPrime(num);
}

console.log(myFunction(38));
console.log(myFunction(7));
console.log(myFunction(119));
console.log(myFunction(2000));

// let result = 0;
// for (let i = 1; i <= 3; i = i + 1) {
//   console.log(i);
//   result = result + i;
// }
// console.log(result === 6);

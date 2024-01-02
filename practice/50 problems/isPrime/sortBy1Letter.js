function myFunction(arr) {
  let resultObj = {};
  arr.forEach((e) => {
    const firstLetter = e.charAt(0).toLowerCase();
    // if (resultObj[firstLetter]) {
    //   resultObj[firstLetter].push(e);
    // } else {
    //   resultObj[firstLetter] = [e];
    // }
    // HIP HIP HURA!!!!! DZIALA LOOOL POZDRO PANIE PRACZ!!!!
    resultObj[firstLetter]
      ? resultObj[firstLetter].push(e)
      : (resultObj[firstLetter] = [e]);
  });
  return resultObj;
}

console.log(myFunction(["Alf", "Alice", "Ben"]));
console.log(myFunction(["Ant", "Bear", "Bird"]));
console.log(myFunction(["Berlin", "Paris", "Prague"]));
// console.log(myFunction(-5, 7));

// let result = 0;
// for (let i = 1; i <= 3; i = i + 1) {
//   console.log(i);
//   result = result + i;
// }
// console.log(result === 6);

// function myFunction(a, b) {
//   let result = [];
//   let rest = a;
//   while (rest.length) {
//     result.push(rest.slice(-3));
//     rest = rest.slice(0, -3);
//   }
//   return result.reverse().join(b);
// }

// let letters = [...str];
// let temp = [];
// let letter;
// let result = [];
// for (let i = 0; i < letters.length; i++) {
//   letter = letters[i].charCodeAt() + 1;
//   letter = letter.toString();
//   temp.push(letter);
// }
// for (let m = 0; m < temp.length; m++) {
//   letter = String.fromCharCode(temp[m]);
//   result.push(letter);
// }
// return result.join("");

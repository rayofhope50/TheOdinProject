function myFunction(str) {
  return;
  str
    .split("")
    .map((e) => String.fromCharCode(e.charCodeAt(0) + 1))
    .join("");
}

console.log(myFunction("bnchmf"));
console.log(myFunction("bgddrd"));
console.log(myFunction("sdrshmf"));
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

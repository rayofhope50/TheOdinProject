function myFunction(a) {
  let board = "";
  for (let i = 0; i < a; i++) {
    for (let k = 0; k < a; k++) {
      if ((i + k) % 2 === 0) {
        board += " ";
      } else {
        board += "\u2586";
      }
    }
    board += "\n";
  }
  return board;
}

console.log(myFunction(6));
console.log(myFunction(8));
console.log(myFunction(16));
// console.log(myFunction(-5, 7));

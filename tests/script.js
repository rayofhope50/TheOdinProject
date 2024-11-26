let calculator = {
  a: 0,
  b: 0,
  read() {
    this.a = prompt("Give first value:");
    this.b = prompt("Give second value:");
  },
};
calculator.read();
console.log(calculator.a);

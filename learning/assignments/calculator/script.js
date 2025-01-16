let a = 0;
let b = 0;
let oper = "";

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  a = +prompt("Give first number:");
  b = +prompt("Give second number:");
  oper = prompt("What operation + - * / ?");
  if (oper == "+") {
    console.log(add(a, b));
  }
  if (oper == "-") {
    console.log(substract(a, b));
  }
  if (oper == "*") {
    console.log(multiply(a, b));
  }
  if (oper == "/") {
    console.log(divide(a, b));
  }
}
// operate();

const res = document.getElementById("res");
const change = document.getElementById("change");
const percent = document.getElementById("percent");
const div = document.getElementById("div");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multi = document.getElementById("multi");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subs = document.getElementById("subs");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const sum = document.getElementById("sum");
const del = document.getElementById("del");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const display = document.getElementById("display");
res.addEventListener("click", () => {
  console.log("res clicked");
});
change.addEventListener("click", () => {
  display.value += "1";
});
percent.addEventListener("click", () => {
  console.log("res clicked");
});
div.addEventListener("click", () => {
  display.value += "1";
});
seven.addEventListener("click", () => {
  console.log("res clicked");
});
eight.addEventListener("click", () => {
  display.value += "1";
});
nine.addEventListener("click", () => {
  console.log("res clicked");
});
multi.addEventListener("click", () => {
  display.value += "1";
});
four.addEventListener("click", () => {
  console.log("res clicked");
});
five.addEventListener("click", () => {
  display.value += "1";
});
six.addEventListener("click", () => {
  console.log("res clicked");
});
subs.addEventListener("click", () => {
  display.value += "1";
});
one.addEventListener("click", () => {
  console.log("res clicked");
});
two.addEventListener("click", () => {
  display.value += "1";
});
three.addEventListener("click", () => {
  console.log("res clicked");
});
sum.addEventListener("click", () => {
  display.value += "1";
});
del.addEventListener("click", () => {
  console.log("res clicked");
});
zero.addEventListener("click", () => {
  display.value += "1";
});
dot.addEventListener("click", () => {
  console.log("res clicked");
});
equal.addEventListener("click", () => {
  display.value += "1";
});
display.addEventListener("click", () => {
  console.log("res clicked");
});

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

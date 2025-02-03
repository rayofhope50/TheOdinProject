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

let a;
let b;
let oper = "";
let temp = "";
let lastKey = ""; // tracks last key to prevent double sign clicking

seven.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  display.value += "7";
  temp += "7";
  lastKey = "7";
});
eight.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  display.value += "8";
  temp += "8";
  lastKey = "8";
});
nine.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  display.value += "9";
  temp += "9";
  lastKey = "9";
});

four.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  display.value += "4";
  temp += "4";
  lastKey = "4";
});
five.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  display.value += "5";
  temp += "5";
  lastKey = "5";
});
six.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  display.value += "6";
  temp += "6";
  lastKey = "6";
});
one.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  display.value += "1";
  temp += "1";
  lastKey = "1";
});
two.addEventListener("click", function () {
  if (lastKey == "=") {
    lastKey = this.innerText;
    temp = this.innerText;
    display.value = this.innerText;
    return;
  }
  lastKey = this.innerText;

  display.value += this.innerText;
  console.log(this.innerText);
  temp += this.innerText;
});

zero.addEventListener("click", () => {
  if (lastKey == "=") {
    display.value = "";
    temp = "0";
  }
  lastKey = "0";
  display.value += "0";
  temp += "0";
});
dot.addEventListener("click", () => {
  lastKey = ".";

  display.value += ".";
  temp += ".";
});
equal.addEventListener("click", () => {
  console.log(
    ` equal start a = ${a}, b = ${b}, temp = ${temp}, lastKey = ${lastKey}, oper = ${oper}`
  );
  // prevents multiple clicks
  if (lastKey == "=") {
    return;
  }
  b = Number(temp);
  lastKey = "=";
  temp = "";
  const operResult = operate(a, b, oper);
  temp = operResult.toString();
  a = "";
  b = "";
  oper = "";
});
sum.addEventListener("click", () => {
  //prevents multiple clicks of the same button
  if (lastKey == "+") {
    return;
  }
  // if a oper b trying to press another oper it should execute first operation before attempting a new one
  if (oper !== "") {
    // checks if last think done was an equastion and i have number in temp if thats the case i want to keep that numnber anc cary on with my new equasin with the number as an a
    if (lastKey == "=") {
      a = Number(temp);
      temp = "";
      oper = "+";
      display.value += " + ";
    }
    b = Number(temp);
    lastKey = "+";
    temp = "";
    const operResult = operate(a, b, oper);
    temp = operResult.toString();
    a;
    b;
    oper = "";
  }
  lastKey = "+";
  a = Number(temp);
  temp = "";
  oper = "+";
  display.value += " + ";
  // console.log(
  //   `a=  ${a} b= ${b} temp= ${temp} oper= ${oper} lastkey = ${lastKey}`
  // );
});
three.addEventListener("click", function () {
  // checks if last key was = if so when you press that number it clears everything assuming you start new equasion
  if (lastKey == "=") {
    lastKey = this.innerText;
    temp = this.innerText;
    display.value = this.innerText;
    return;
  }
  lastKey = this.innerText;

  display.value += this.innerText;
  console.log(this.innerText);
  temp += this.innerText;
});

subs.addEventListener("click", () => {
  console.log(
    ` sub start a = ${a}, b = ${b}, temp = ${temp}, lastKey = ${lastKey}, oper = ${oper}`
  );

  if (lastKey == "-") {
    return;
  }

  lastKey = "-";
  a = Number(temp);
  temp = "";
  oper = "-";
  display.value += " - ";
  console.log(
    `sub end a = ${a}, b = ${b}, temp = ${temp}, lastKey = ${lastKey}, oper = ${oper}`
  );
});
multi.addEventListener("click", () => {
  if (lastKey == "=") {
    lastKey = "×";
    a = Number(temp);
    temp = "";
    oper = "×";
    display.value += " × ";
  }
  if (lastKey == "×") {
    return;
  }
  if (a !== undefined && oper !== undefined) {
    b = Number(temp);

    const operResult = operate(a, b, oper);

    temp = operResult.toString();
    a;
    b;
    oper = "";
  }
  lastKey = "×";
  a = Number(temp);
  temp = "";
  oper = "×";
  display.value += " × ";
});
div.addEventListener("click", () => {
  if (lastKey == "÷") {
    lastKey = "÷";
    a = Number(temp);
    temp = "";
    oper = "÷";
    display.value += " ÷ ";
  }
  if (lastKey == "÷") {
    return;
  }
  if (a !== undefined && oper !== undefined) {
    b = Number(temp);

    const operResult = operate(a, b, oper);

    temp = operResult.toString();
    a;
    b;
    oper = "";
  }
  lastKey = "÷";

  a = Number(temp);
  temp = "";
  oper = "÷";
  display.value += " ÷ ";
});
res.addEventListener("click", () => {
  lastKey = "res";
  display.value = "";
  temp = "";
  a;
  b;
  oper = "";
});
change.addEventListener("click", () => {
  console.log("res clicked");
});
percent.addEventListener("click", () => {
  console.log("res clicked");
});

del.addEventListener("click", () => {
  console.log("res clicked");
});
display.addEventListener("click", () => {
  console.log("res clicked");
});

function add(a, b) {
  const result = a + b;
  return result;
}

function substract(a, b) {
  const result = a - b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return parseFloat(result.toFixed(6));
}

function divide(a, b) {
  const result = a / b;
  return parseFloat(result.toFixed(6));
}

function operate(a, b, oper) {
  let result;
  if (oper == "+") {
    result = add(a, b);
  }
  if (oper == "-") {
    result = substract(a, b);
  }
  if (oper == "×") {
    result = multiply(a, b);
  }
  if (oper == "÷") {
    result = divide(a, b);
  }
  display.value = result;
  count = 1;
  const operResult = result;
  return operResult;
}

const res = document.getElementById("res");
const change = document.getElementById("change");
const percent = document.getElementById("percent");
const div = document.getElementById("div");
const multi = document.getElementById("multi");
const subs = document.getElementById("subs");
const sum = document.getElementById("sum");
const del = document.getElementById("del");
const equal = document.getElementById("equal");
const display = document.getElementById("display");
const digits = document.querySelectorAll(".dig");

digits.forEach((digit) => {
  console.log(`button clicked`);
  digit.addEventListener("click", function () {
    digitLogic(this.innerText);
  });
});

let a;
let b;
let oper = "";
let temp = "";
let lastKey = ""; // tracks last key to prevent double sign clicking

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

function digitLogic(text) {
  if (lastKey == "=") {
    lastKey = text;
    temp = text;
    display.value = text;
    return;
  }
  lastKey = text;

  display.value += text;
  console.log(text);
  temp += text;
}

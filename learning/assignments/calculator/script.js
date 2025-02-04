const res = document.getElementById("res");
const change = document.getElementById("change");
const percent = document.getElementById("percent");
const del = document.getElementById("del");
const equal = document.getElementById("equal");
const digits = document.querySelectorAll(".dig");
const opers = document.querySelectorAll(".oper");

// function responsible for creating and managing operations like sum div etc
opers.forEach((oper) => {
  oper.addEventListener("click", function () {
    operationLogic(this.innerText);
  });
});

// function responsible for creating digit buttons and their operation
digits.forEach((digit) => {
  digit.addEventListener("click", function () {
    digitLogic(this.innerText);
  });
});

let a;
let b;
let oper = "";
let temp = "";
let lastKey = ""; // tracks last key to prevent double sign clicking

// special buttons that do specific functions and cannot be multiplied
equal.addEventListener("click", () => {
  // prevents multiple clicks
  if (lastKey == "=") {
    return;
  }
  b = Number(temp);
  lastKey = "=";
  equalityLogic();
});
// AC button resseting the calculator to 0 state
res.addEventListener("click", () => {
  lastKey = "res";
  display.value = "";
  temp = "";
  a;
  b;
  oper = "";
});

// change +/- sign for the number
change.addEventListener("click", () => {
  let number = Number(temp);
});
percent.addEventListener("click", () => {
  console.log("res clicked");
});

//delete last insert
del.addEventListener("click", () => {
  lastKey = "del";
  // console.log(
  //   ` del start a= ${a} b= ${b} oper= ${oper} temp= ${temp} lastKey=${lastKey} display= ${display.value}`
  // );
  let value = display.value;

  if (
    value.endsWith(" + ") ||
    value.endsWith(" - ") ||
    value.endsWith(" × ") ||
    value.endsWith(" ÷ ")
  ) {
    // If deleting an operator, remove it and reset the operator variable
    value = value.slice(0, -3);
    oper = "";
    temp = value; // Keep whatever remains
  } else if (oper !== "" && temp !== "") {
    // If there's an operation in progress, delete from temp (b's value)
    value = value.slice(0, -1);
    temp = temp.slice(0, -1);
    b = temp || ""; // Keep it empty instead of undefined
  } else {
    // Otherwise, delete from the main number (a)
    value = value.slice(0, -1);
    temp = value;
    a = temp || ""; // Keep it empty instead of undefined
  }
  display.value = value;
});

// all of the code functions are below

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
  console.log(
    ` digit start a= ${a} b= ${b} oper= ${oper} temp= ${temp} lastKey=${lastKey}`
  );
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
  console.log(
    ` digit end a= ${a} b= ${b} oper= ${oper} temp= ${temp} lastKey=${lastKey}`
  );
}

function operationLogic(text) {
  //prevents multiple clicks of the same button
  if (lastKey == text) {
    return;
  }
  // if a oper b trying to press another oper it should execute first operation before attempting a new one
  if (oper !== "") {
    // checks if last think done was an equastion and i have number in temp if thats the case i want to keep that numnber anc cary on with my new equasin with the number as an a
    if (lastKey == "=") {
      a = Number(temp);
      temp = "";
      oper = text;
      display.value += ` ${text} `;
    }
    b = Number(temp);
    lastKey = text;
    // part up had to be kept out of the functon below as opers use text and if i had to use that for equality = also it would unnecessarly complicate thinks
    equalityLogic();
  }
  lastKey = text;
  a = Number(temp);
  temp = "";
  oper = text;
  display.value += ` ${text} `;
  console.log(
    ` oper end a= ${a} b= ${b} oper= ${oper} temp= ${temp} lastKey=${lastKey}`
  );
}

function equalityLogic() {
  temp = "";
  const operResult = operate(a, b, oper);
  temp = operResult.toString();
  a = "";
  b = "";
  oper = "";
}

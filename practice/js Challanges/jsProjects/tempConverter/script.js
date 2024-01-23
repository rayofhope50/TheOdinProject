"use strict";
// Great solution my embaracing code is lower
const inputs = document.querySelectorAll("input");
const inputC = document.getElementById("inputC");
const inputF = document.getElementById("inputF");
const inputK = document.getElementById("inputK");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.value = "";
    console.log("changed to empty");
  });
  input.addEventListener("blur", () => {
    console.log("deselected");
    const inputVal = input.value;
    computeTemp(input.id, input.value);
  });
});

function computeTemp(id, value) {
  console.log("start functoin", id, value);
  switch (id) {
    case "inputC":
      inputF.value = ((parseFloat(value) * 9) / 5 + 32).toFixed(2);
      inputK.value = (parseFloat(value) + 273.15).toFixed(2);
      break;
    case "inputF":
      inputC.value = (((parseFloat(value) - 32) * 5) / 9).toFixed(2);
      inputK.value = (((parseFloat(value) - 32) * 5) / 9 + 273.15).toFixed(2);
      break;
    case "inputK":
      inputC.value = (parseFloat(value) - 273.15).toFixed(2);
      inputF.value = (((parseFloat(value) - 273.15) * 9) / 5 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

// MY EMBARACING CODE
// const inputs = document.querySelectorAll("input");
// const inputC = document.getElementById("inputC");
// const inputF = document.getElementById("inputF");
// const inputK = document.getElementById("inputK");
// const result = document.getElementById("result");
// // [0] is C [1] is F [2] is K
// let temps = [];
// inputs.forEach((input) => {
//   // this clears the input tha's been clicked on
//   input.addEventListener("focus", () => {
//     input.value = "";
//   });
//   // main calc algo
//   input.addEventListener("blur", () => {
//     const inputVal = input.value;
//     if (isValidNumber(inputVal)) {
//       updateTemps(input.id, parseFloat(inputVal));
//     }
//   });
// });

// function updateTemps(inputId, temp) {
//   switch (inputId) {
//     case "inputC":
//       calcCel(temp);
//       break;
//     case "inputF":
//       calcFahre(temp);
//       break;
//     case "inputK":
//       calcKel(temp);
//       break;
//     default:
//       break;
//   }
// }

// function isValidNumber(value) {
//   return value !== "" && !isNaN(value);
// }
// function calcCel(temp) {
//   temps[1] = ((temp * 9) / 5 + 32).toFixed(2);
//   temps[2] = (temp + 273.15).toFixed(2);
//   inputF.value = temps[1];
//   inputK.value = temps[2];
// }

// function calcFahre(temp) {
//   temps[0] = (((temp - 32) * 5) / 9).toFixed(2);
//   temps[2] = (((temp - 32) * 5) / 9 + 273.15).toFixed(2);
//   inputC.value = temps[0];
//   inputK.value = temps[2];
// }
// function calcKel(temp) {
//   temps[0] = (temp - 273.15).toFixed(2);
//   temps[1] = (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
//   inputC.value = temps[0];
//   inputF.value = temps[1];
// }

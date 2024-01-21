const button = document.getElementById("button");
const input = document.getElementById("ageInput");
const span = document.getElementById("result");

document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  ageCalc();
});

function ageCalc() {
  const newVal = input.value.split("-");
  const currentYear = new Date().getFullYear();
  const result = currentYear - parseInt(newVal[0]);
  span.innerText = `You are ${result} years old!`;
}

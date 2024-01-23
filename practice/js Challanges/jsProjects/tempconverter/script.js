const inputs = document.querySelectorAll("input");
const result = document.getElementById("result");
const inputC = document.getElementById("inputC");
const inputF = document.getElementById("inputF");
const inputK = document.getElementById("inputK");
// [0] is C [1] is F [2] is K
let temps = [];
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.value = "";
    input.addEventListener("blur", () => {
      const inputVal = input.value;
      if (inputVal !== "" && !isNaN(inputVal)) {
        const inputId = input.id;
        if (input.id == "inputC") {
          calcCel(inputVal);
        } else if (input.id == "inputF") {
          calcFahre(inputVal);
        } else {
          calcKel(inputVal);
        }

        console.log(temps);
      }
    });
  });
});

function calcCel(temp) {
  temps = [];
  temp = parseFloat(temp);
  temps[1] = ((temp * 9) / 5 + 32).toFixed(2);
  temps[2] = (temp + 273.15).toFixed(2);
  inputF.value = temps[1];
  inputK.value = temps[2];
}

function calcFahre(temp) {
  temps = [];
  temp = parseFloat(temp);
  temps[0] = (((temp - 32) * 5) / 9).toFixed(2);
  temps[2] = (((temp - 32) * 5) / 9 + 273.15).toFixed(2);
  inputC.value = temps[0];
  inputK.value = temps[2];
}
function calcKel(temp) {
  temps = [];
  temp = parseFloat(temp);
  temps[0] = (temp - 273.15).toFixed(2);
  temps[1] = (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
  inputC.value = temps[0];
  inputF.value = temps[1];
}

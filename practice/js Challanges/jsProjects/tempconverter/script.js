const inputs = document.querySelectorAll("input");
const result = document.getElementById("result");
// [0] is C [1] is F [2] is K
let temps = [];
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const id = input.id;
    calcFahre(input.value);
    console.log(temps);
  });
});

function calcFahre(temp) {
  temps[0].push((temp * 9) / 5 + 32);
  temps[2].push(((temp - 273.15) * 9) / 5 + 32);
}

const button = document.getElementById("button");
const tipInVal = document.getElementById("tipInput");
const perInVal = document.getElementById("percentInput");
const total = document.getElementById("total");
document.getElementById("tipForm").addEventListener("submit", function (event) {
  event.preventDefault();
  submitForm();
});

// button.addEventListener("click", () => {
//   submitForm();
// });

function submitForm() {
  let tipVal = parseInt(tipInVal.value);
  let perVal = parseInt(perInVal.value);
  let totalVal = (tipVal * perVal) / 100 + tipVal;
  total.innerText = "£" + totalVal;

  console.log(tipVal, perVal, totalVal);
}

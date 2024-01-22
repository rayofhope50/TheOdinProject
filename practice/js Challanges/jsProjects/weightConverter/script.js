const input = document.getElementById("input");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  const inputVal = input.value;
  const final = (inputVal / 2.2).toFixed(2);
  return (result.innerText = final);
});

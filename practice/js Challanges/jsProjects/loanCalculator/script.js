"use strict";
const months = document.getElementById("months");
const interests = document.getElementById("interests");
const loan = document.getElementById("loan");
const total = document.getElementById("summary");
const inputs = document.querySelectorAll("input");

loan.value = "10000";
interests.value = "10";
months.value = "12";

inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    const loa = parseInt(loan.value);
    const interest = parseInt(interests.value) / 100;
    const month = parseInt(months.value);
    const extra = (loa * interest) / month;
    const temp = (loa / month + extra).toFixed(2);
    total.innerText = `${temp} $`;
    console.log(temp);
  });
});

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
    const extra = loa * interest;
    console.log(extra);
    console.log(loa);
    console.log(interest);
    console.log(month);
    const temp = (loa + extra) * (interest / month);
    console.log(temp);
  });
});

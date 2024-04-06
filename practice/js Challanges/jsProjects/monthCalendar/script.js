"use strict";
const num = document.getElementById("num");
const month = document.getElementById("month");
const dayName = document.getElementById("dayName");
const monthName = document.getElementById("monthName");
const dayNum = document.getElementById("dayNum");
const year = document.getElementById("year");
const date = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
dayNum.innerText = `${date.getDate()}`;
year.innerText = `${date.getFullYear()}`;
month.innerText = `${monthNames[date.getMonth()]}`;
monthName.innerText = `${monthShort[date.getMonth()]}`;
dayName.innerText = `${dayNames[date.getDay() - 1]}`;

const first = getFirstDay(date.getMonth(), date.getFullYear()) - 1;
const n = dayinMonth(date.getMonth() + 1, date.getFullYear());
function newDates(n) {
  let count = 0;
  while (count < first) {
    const para = document.createElement("p");
    para.textContent = `${""}`;
    num.appendChild(para);
    count++;
  }
  for (let i = 1; i <= n; i++) {
    const para = document.createElement("p");
    para.textContent = `${i}`;
    num.appendChild(para);
    count++;
    if (i == date.getDate()) {
      para.setAttribute("class", "today");
    }
  }
  let weeks = count / 7;
  if (count % 7 !== 0) {
    weeks++;
  }
  let k = Math.floor(weeks) * 7 - count;
  if (k > 0) {
    for (let i = 0; i < k; i++) {
      const para = document.createElement("p");
      para.textContent = `${""}`;
      num.appendChild(para);
    }
  }
}

function dayinMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
function getFirstDay(month, year) {
  const date = new Date(year, month, 1);
  return date.getDay();
}
newDates(n);

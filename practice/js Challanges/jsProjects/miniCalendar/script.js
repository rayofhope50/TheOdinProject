"use strict";
const month = document.querySelector(".header");
const dayTxt = document.querySelector(".day__txt");
const dayNr = document.querySelector(".day__nr");
const year = document.querySelector(".year");
const today = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Osctober",
  "November",
  "December",
];
//
//
dayNr.innerText = today.getDate();
year.innerText = today.getFullYear();
dayTxt.innerText = days[today.getDay()];
month.innerText = months[today.getMonth()];

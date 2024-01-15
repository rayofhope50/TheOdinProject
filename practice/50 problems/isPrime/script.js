function myFunction(a) {
  // Takes number of minutes from date 31 min
  let min = a.getMinutes();
  // % of 31/ 15 = 1 reminder is 1
  let reminder = min % 15;
  // looks for number of minutes missing to full quarter which is
  // every 15 min that's why 15 - 1 = 14 beacuse 31 + 14 equalls 45
  // which we are looking for
  let minutesToAdd = reminder === 0 ? 0 : 15 - reminder;
  // creates a new date 15:31 which we can modify
  let nextQuarterHour = new Date(a);
  // modifies minutes in new Date to 31 + 14 from previous examples to make it full 45
  nextQuarterHour.setMinutes(min + minutesToAdd);
  // it reads minutes from date we setted up in the previous step and
  // returns it
  return nextQuarterHour.getMinutes();
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)));
// hell

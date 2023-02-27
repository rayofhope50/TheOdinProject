'use strict';
// const bookings = [];
// ////////// BUG Setting default values
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', undefined, 100);

// const flight = 'LH123';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 2342314,
// };

// const checkIn = function (flightNum, passenger) {
//   //////
//   flightNum = 'LH999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 2342314) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// ///// BUG BUG BUG flight did not change to LH999 cos it created copy of flight into flightNum, but object Jonas got changed as we attach patchway to oryginal

// console.log(flight);
// console.log(jonas);
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);
//// Higher order functions BUG BUG BUG  BUG

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
S;
///////// JS USES CALLBACKS ALL THE TIME
const high5 = function () {
  console.log('HELLO!');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

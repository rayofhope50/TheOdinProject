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

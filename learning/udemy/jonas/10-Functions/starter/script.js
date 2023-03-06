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

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// //// higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);
// S;
// ///////// JS USES CALLBACKS ALL THE TIME
// const high5 = function () {
//   console.log('HELLO!');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//
///////// THIS METHODS BUG BUG BUG
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

/////// Because we assigned function to a const we need to use .call function because this key word doesn't work with reg expr but .call cals a function
const book = lufthansa.book;
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');

//// Apply method passes arrays of data
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//// BIND METHOD
/// You are binding a function into a constnt and can use it by a name of a new const
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Ray Pracz');

//// with event listenres
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

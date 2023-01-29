'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // BUG IMPORTANT we did not pass 4 inputs from restaurant.orderDelivery
  // we gave 1 object and in function destructured it using ->{} like below ({})
  orderDelivery({ mainIndex = 1, starterIndex = 0, time = 'ASAP', address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours,
};

// // BUG Object.keys Object property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // BUG object property VALUES Object.values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we are open at ${open} and close at ${close}`);
// }

// // BUG OPTIONAL CHAINING
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// // BUG for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are open at ${open}`);
// }
// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
// console.log(users[0]?.name ?? 'User array empty');

// console.log(pizza, risotto, otherFood);

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // BUG OR ?? (null or udefined) assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ??= 10;
// // rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);

// // || AND && short-circuiting BUG BUG BUG
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // 1 )DESTRUCTURING BUG BUG BUG

// // BUG SPREAD, because of right side of =
// const arr = [1, 2, ...[3, 4]];

// //BUG REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // BUG Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);

// // 2) Functions BUG BUG BUG
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 2, 6, 4);
// add(8, 1, 0, 3, 6, 4, 2);
// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// // BUG Spread Operator BUG
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// // ...arr very importante spreading (assigning unnown values to the array)
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// //BUG copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //BUG join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// restaurant.orderDelivery({
//   // time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// // BUG Destructure object
// const { name, openingHours, categories } = restaurant;

// // BUG change name for data you're pulling out
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // BUG set default values in object if data can be unavailable
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // BUG mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // BUG Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//// BUG Destructure array
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// // right method
// const [x, y, z] = arr;
// console.log(x, y, z);

// // BUG BUG way to skip a result in an array when Destructuring
// const [first, , third] = restaurant.categories;
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // BUG switching values
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // BUG revive 2 return values from a function with destructure
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // BUG destructure arr inside an arr
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // BUG default values destructure not knowing number of items in arr
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

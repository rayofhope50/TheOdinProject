'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // BUG IMPORTANT we did not pass 4 inputs from restaurant.orderDelivery
  // we gave 1 object and in function destructured it using ->{} like below ({})
  orderDelivery: function ({
    mainIndex = 1,
    starterIndex = 0,
    time = 'ASAP',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
};

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

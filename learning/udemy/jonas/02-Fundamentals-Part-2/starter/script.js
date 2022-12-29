'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive :D');
// function logger() {
//     console.log('My name is Jonas');
// }
// logger();
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} milion people and its capital city is ${capitalCity}.`
//     return description;
// }

// const poland = describeCountry('Poland', 38, 'Warsaw');
// console.log(poland);

// const germany = describeCountry('Germany', 45, 'Berlin');
// console.log(germany);

// const finland = describeCountry('Finland', 25, 'Helsinki');
// console.log(finland);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);


// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// const population = 7900;
// const countryPop = 1441;


// function percentageOfWorld1(countryPop) {
//     return (countryPop * 100) / population;
// }
// const percentage = percentageOfWorld1(countryPop);
// console.log(percentage);
// // 

// const percentageOfWorld2 = function (countryPop) {
//     return (countryPop * 100) / population;
// }
// const percentage2 = percentageOfWorld2(countryPop);
// console.log(percentage2);


//arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years!`;
// }

// console.log(yearsUntilRetirement(1991, 'Ray'));

// const percentageOfWorld3 = (countryPop, population) => {
//     const percentage = (countryPop * 100) / population;
//     return percentage;
// }
// console.log(percentageOfWorld3(38, 7900));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of  apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


//calling in another function
// const population = 7900;
// const countryPop = 2000;
// const country = 'Poland';

// function percentageOfWorld1(countryPop) {
//     return (countryPop * 100) / population;
// }
// const percentage = percentageOfWorld1(countryPop);
// console.log(percentage);

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(countryPop);
//     const description = `${country} has ${countryPop} million people, which is about ${percentage}% of the world!`;
//     return description;
// }
// console.log(describePopulation(country, population));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years!`);
//         return retirement;

//     } else {
//         console.log(`${firstName} already retired!`);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1991, 'Ray'));
// console.log(yearsUntilRetirement(1905, 'Mike'));

// //FUNCTION DECLARATION
// function calcAge(birthYear){
//     return 2037 - birthYear;
// }
// //FUNCTION EXPRESSION
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// //ARROW FUNCTION
// const calcAge = birthYear => 2037 - birthYear;

// coding challange #1
// const sDolphins1 = 44;
// const sDolphins2 = 23;
// const sDolphins3 = 71;
// const sKoalas1 = 65;
// const sKoalas2 = 54;
// const sKoalas3 = 49;
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function aveScore1(score1, score2, score3) {
//     const aveDolphins = calcAverage(score1, score2, score3);
//     // const aveDolScore = `Dolphins average score is ${aveDolphins}!`
//     return aveDolphins;
// }
// function aveScore2(score1, score2, score3) {
//     const aveKoalas = calcAverage(score1, score2, score3);
//     // const aveKoalScore = `Koalas average score is ${aveKoalas}!`
//     return aveKoalas;
// }
// const endScoreDol = aveScore1(sDolphins1, sDolphins2, sDolphins3);
// const endScoreKoal = aveScore2(sKoalas1, sKoalas2, sKoalas3);

// if (endScoreDol > endScoreKoal) {
//     console.log(`Dolfins won the competition with ${endScoreDol} to ${endScoreKoal} for Koalas!`);
// } else {
//     console.log(`Koalas won the competition with ${endScoreKoal} to ${endScoreDol} for Dolphins!`);
// }

// //ARRAYS

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// //You can add all sort of expressions inside
// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age5 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age5);
//////exercise Introduction to Arrays
// const population = 7990
// const populations = ['1229', '2324', 234, 124];
// console.log(populations.length === 4);

// function percentageOfWorld1(countryPop) {
//     return (countryPop * 100) / population;
// }

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

// const friends = ['Michael', 'Steven', 'Peter'];

// // ////////add elements
// const newLength = friends.push('Jay');
// friends.unshift('John');

// /////////////remove elements
// friends.pop();
// friends.shift();

// console.log(friends.includes('Steven'));
// console.log(friends);

// if (friends.includes('Peter')) {
//     console.log(`You have a friend called Peter`);
// }

// const neighbours = ['Germany', 'Cech', 'Ukraine', 'Latvia'];
// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (neighbours.includes('Germany')) {
//     console.log(`Probably a central European Country :D`);
// } else {
//     console.log(`Probably not a central European Country :D`);
// }

// neighbours[0] = 'Portugal';
// console.log(neighbours);
// if (neighbours.includes('Germany')) {
//     console.log(`Probably a central European Country :D`);
// } else {
//     console.log(`Probably not a central European Country :D`);
// }

///////// Coding challange #2
// let tip = 0;
// const bills = [125, 555, 44];
// function calcTip(value1) {
//     if (value1 >= 50 && value1 <= 300) {
//         tip = value1 * 0.15;

//     } else {
//         tip = value1 * 0.2;
//     }
//     return tip;
// }
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),]
// let total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]
// console.log(total);

//////////////// OBJECTS
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

////////// dot notation
console.log(jonas.lastName);
////////// bracket notation <- use this!
console.log(jonas['lastName']);

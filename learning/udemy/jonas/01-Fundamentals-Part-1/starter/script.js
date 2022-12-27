
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES';
// console.log(javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Ray';
// const lastName = 'Pracz';

// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);

// Coding challange #1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// let markBmi = markMass / (markHeight ** 2);
// let johnBmi = johnMass / (johnHeight ** 2);

// console.log(markBmi, johnBmi);

// const markHigherBMI = markBmi > johnBmi;

// console.log(markHigherBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2022;

// const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(jonas);

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license')
// } else {
//     const yearsLeft = 18 - age;

//     console.log(`Sarah is too young. Waight another ${yearsLeft} years.`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }

// console.log(century);

// Coding challange #2

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// let markBmi = markMass / (markHeight ** 2);
// let johnBmi = johnMass / (johnHeight ** 2);

// if (markBmi < johnBmi) {
//     console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
// } else {
//     console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
// }

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);

// console.log(String(23));
//type coercion

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is a grat number.");
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 nor 7');
}
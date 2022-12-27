// Values and Variables assignment
const country = "Poland";
const continent = "Europe";
let population = 38356354;

// console.log(`${country} which is in ${continent} has around ${population}.`);

//Data types assignment

const isIsland = false;
const language = 'Polish';
console.log(`${country} which is in ${continent} has around ${population} ppl. It is a ${isIsland} island and language is ${language}`);

let halfPopulation = population / 2;
console.log(halfPopulation);

let finishPopulation = 6000000;
const populationComparing = finishPopulation < population;

console.log(populationComparing);

let averagePopulation = 33000000;
const averagePopulationCompare = averagePopulation > halfPopulation;

console.log(averagePopulationCompare);

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average.`)
}
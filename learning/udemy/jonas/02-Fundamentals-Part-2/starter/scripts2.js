
// let myCountry = {
//     country: 'Poland',
//     capital: 'Warsaw',
//     language: 'polish',
//     population: 37.78,
//     neighbours: ['Germany', 'Cech', 'Slowania'],

//     describe: function () {
//         this.checkIsland = myCountry['neighbours'].length > 0 ? false : true;
//         return this.checkIsland;
//     }
// }

// // console.log(`${myCountry['country']} has ${myCountry['population']} milion ${myCountry['language']}-speaking people, ${myCountry['neighbours'].length} neighbouring countries and a capital called ${myCountry['capital']}.`);

// myCountry.describe();

// console.log(myCountry.describe());

// /////////Coding Challange #3
// const mark = {
//     fullName: 'Mark Miller',
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.weight / (this.height ** 2);
//         return this.BMI;
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.weight / (this.height ** 2);
//         return this.BMI;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.BMI, john.BMI);
// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
// } else {
//     console.log(`${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} BMI (${mark.BMI})`);
// }

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting.`);
// }

// const population = 7990;
// const populations = ['1229', '2324', 234, 124];
// const percentages2 = [];

// function percentageOfWorld1(countryPop) {
//     return (countryPop * 100) / population;
// }

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let k = 0; k < listOfNeighbours[i].length; k++) {
        console.log(`Neighbour: ${listOfNeighbours[i][k]}`, i, k);

    }
}
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
  // and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
  printGoals: function (...names) {
    console.log(...names);
    for (let i = 0; i < names.length; i++) {
      let score = 0;
      for (let j = 0; j < game.scored.length; j++) {
        if (names[i] === game.scored[j]) {
          score++;
        }
      }
      console.log(names[i], score);
    }
  },
};

////// ################# BUG CHALLANGE 1 BOOM DONE SHAKALAKA
// const team1 = game.odds.team1;
// const team2 = game.odds.team2;
// const draw = game.odds.x;
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// const [gk, ...fieldPlayers] = game.players[0];
// const allPlayers = [...game.players[0], ...game.players[1]];
// let players1Final = game.players[0];
// players1Final.push('Thiago', 'Coutinho', 'Perisic');
// game.printGoals('Gnarby', 'Hummels', 'Lewandowski', 'Kimmich');

// const winner =
//   (game.odds.team1 < game.odds.team2 &&
//     `${game.team1} is more likely to win`) ||
//   (game.odds.team2 < game.odds.team1 && `${game.team2} is more likely to win`);
// console.log(winner);
// Coding Challenge #2

/* 


3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
////////////// BUG Coding challange 2 BUG
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// let goals = 0;
// for (const player of game.scored) {
//   goals++;
//   console.log(`Goal nr. ${goals} scorred by ${player}`);
// }

// for (const [i, players] of game.scored.entries())
//   console.log(`Goal nr. ${i + 1} scorred by ${players}`);
// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// for (const x of odds)
//   console.log(
//     (x == '3.25' && `Odd of draw ${x}`) ||
//       (x == '1.33' && `Odd of victory ${game.team1}: ${x}`) ||
//       (x == '6.5' && `Odd of victory ${game.team2}: ${x}`)
//   );

// // BUG WHAT I WAS LOOOKING FOR IN 2nd point
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}:`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// BUG BUG BUGCoding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).






// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// // 1. Create an array 'events' of the different game events that happened (no duplicates)

// const events = new Set(gameEvents.values());
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

// gameEvents.delete(64);
// console.log(gameEvents);
// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL
// for (const [key, event] of gameEvents) {
//   const under = key <= 45 ? `FIRST` : `SECOND`;
//   console.log(`[${under} HALF] ${key}: ${event}`);
// }
///////////////////////////////////////
// Coding Challenge #4 BUG BUG

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// document.querySelector('button').addEventListener('click', function () {
//   const test = document.querySelector('textarea').value;
//   const rows = test.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;

//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

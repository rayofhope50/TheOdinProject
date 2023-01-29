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

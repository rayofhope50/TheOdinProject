// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
//   // and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
//   printGoals: function (...names) {
//     console.log(...names);
//     for (let i = 0; i < names.length; i++) {
//       let score = 0;
//       for (let j = 0; j < game.scored.length; j++) {
//         if (names[i] === game.scored[j]) {
//           score++;
//         }
//       }
//       console.log(names[i], score);
//     }
//   },
// };
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
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// const winner =
//   (game.odds.team1 < game.odds.team2 &&
//     `${game.team1} is more likely to win`) ||
//   (game.odds.team2 < game.odds.team1 && `${game.team2} is more likely to win`);
// console.log(winner);

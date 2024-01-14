function myFunction(a, b) {
  let diff, hrs, min, sec;
  diff = Math.abs(a - b);
  hrs = Math.floor(diff / 60 / 60 / 1000);
  min = Math.floor((diff / 60 / 1000) % 60);
  sec = Math.floor((diff / 1000) % 60);
  // console.log(diff, hours, min, sec);
  return { hrs, min, sec };
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)));

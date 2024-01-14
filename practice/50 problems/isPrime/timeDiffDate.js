function myFunction(a, b) {
  let diff, hrs, min, sec;
  diff = Math.abs(a - b);
  hrs = Math.floor(diff / 60 / 60 / 1000);
  min = Math.floor((diff / 60 / 1000) % 60);
  sec = Math.floor((diff / 1000) % 60);
  // console.log(diff, hours, min, sec);
  return { hrs, min, sec };
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
);
console.log(
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
);

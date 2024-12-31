const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  console.log("start");
  const oldestPerson = people.reduce((oldest, person) => {
    const currentPerson = person.yearOfDeath - person.yearOfBirth;
    const oldestPerson = oldest.yearOfDeath - oldest.yearOfBirth;
    console.log("start2");

    return currentPerson > oldestPerson ? person : oldest;
  });
  return oldestPerson;
};

console.log(findTheOldest(people));

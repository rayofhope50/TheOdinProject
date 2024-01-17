function myFunction(obj) {
  let newObj = { ...obj };
  delete newObj.age;
  delete newObj.email;
  for (key in newObj) {
    if (key == "size") {
      newObj[key] = `${String(newObj[key])}cm`;
    }
    if (key == "weight") {
      newObj[key] = `${String(newObj[key])}kg`;
    }
  }

  return newObj;
}

console.log(
  myFunction({ fn: "Lisa", ln: "Müller", age: 17, size: 175, weight: 67 })
);
console.log(
  myFunction({
    fn: "Martin",
    ln: "Harper",
    age: 26,
    email: "martin.harper@test.de",
    weight: 102,
  })
);
console.log(
  myFunction({ fn: "Andrew", ln: "Harper", age: 81, size: 175, weight: 71 })
);
// console.log(myFunction(-5, 7));

function myFunction(a) {
  let result = Object.entries(a).reduce((l, [key, val], k) => {
    l[key] = val == "" || val == " " ? null : val;
    return l;
  }, {});
  return result;
}

console.log(myFunction({ a: "a", b: "b", c: "" }));
console.log(myFunction({ a: "", b: "b", c: " ", d: "d" }));
console.log(myFunction({ a: "a", b: "b ", c: " ", d: "" }));
// console.log(myFunction(-5, 7));

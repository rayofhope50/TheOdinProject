const even_or_odd = (number) => {
  let result;
  result = number % 2 === 0 ? "even" : "odd";
  return result;
};

console.log(even_or_odd(0)); // 'Even'
console.log(even_or_odd(2)); // 'Even'
console.log(even_or_odd(3)); // 'Odd'
console.log(even_or_odd(-3)); // 'Odd'

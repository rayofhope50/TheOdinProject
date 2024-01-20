const likes = (names) => {
  const list = [...names];
  const len = list.length;
  if (len === 0) return "No one likes this";
  if (len === 1) return `${list[0]} likes this`;
  if (len === 2) return `${list[0]} and ${list[1]} like this`;
  if (len === 3) {
    return `${list[0]}, ${list[1]} and ${list[2]} likes this`;
  } else {
    return `${list[0]}, ${list[1]} and ${list.length - 2} others like this`;
  }
};

console.log(likes([])); // 'no one likes this'
console.log(likes(["Peter"])); // 'Peter likes this'
console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this'
console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this'
console.log(
  likes(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"])
); // 'Alex, Jacob and 2 others like this'

const getCount = (str) => {
  let chars = [...str];
  let newArr = [];
  chars.forEach((char) => {
    if (
      char == "e" ||
      char == "a" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      newArr.push(char);
    }
  });
  return newArr.length;
  // Alternative methods without conversion
  // let vowelCount = 0;
  // for (char of str) {
  //   if ("aeiou".includes(char)) vowelCount++;
  // }
  // return vowelCount;
};

console.log(getCount("my pyx")); // 0
console.log(getCount("pear tree")); // 4
console.log(getCount("abracadabra")); // 5
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13

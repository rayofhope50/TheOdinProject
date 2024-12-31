const palindromes = function (word) {
  const lower = word.toLowerCase();
  const punct = lower.replace(/[!.,?;:()'"-\s]/g, "");
  console.log(punct);
  let temp = "";
  for (let i = punct.length - 1; i >= 0; i--) {
    // console.log(i);
    temp += punct[i];
    console.log(temp);
  }
  return punct === temp ? true : false;
};
console.log(palindromes("A car, a man, a maraca."));

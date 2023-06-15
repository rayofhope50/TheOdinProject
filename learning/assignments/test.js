"use strict";
let n = 10;
for (let i = 2; i <= n; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} long,  ${read}`;
  };
}

const theHobbit = new Book(
  `The Hobbit`,
  `J.R.R Tolkien`,
  `295 pages`,
  `not read`
);

console.log(theHobbit.info());

Book.prototype.sayHello = function () {
  console.log(`hello, i'm a book.`);
};

theHobbit.sayHello();

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(pockets.glasses);

const iterations = 1e6;
console.time(`Direct access (head.glasses)`);
for (let i = 0; i < iterations; i++) {
  let value = head.glasses;
}
console.timeEnd(`Direct access (head.glasses)`);

console.time(`Prototype chain access (pockets.glasses)`);
for (let i = 0; i < iterations; i++) {
  let value = pockets.glasses;
}
console.timeEnd(`Prototype chain access (pockets.glasses)`);

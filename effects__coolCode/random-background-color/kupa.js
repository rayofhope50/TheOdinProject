console.log("hello kupa");

const sketches = document.querySelectorAll(".js-sketch");

attachListeners();
function attachListeners() {
  sketches.forEach((sketch) => {
    sketch.addEventListener("mouseenter", () => randomColor(sketch));
  });
}

function randomColor(sketch) {
  let hexCode = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    console.log(color);
    const random = Math.floor(Math.random() * 16);
    console.log(random);
    color += hexCode[random];
  }
  sketch.style.backgroundColor = color;
}

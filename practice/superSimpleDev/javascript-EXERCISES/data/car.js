class Car {
  #brand;
  #model;
  speed = 0;
  isTrunOpen = false;
  openTrunk() {
    if (this.speed > 0) {
      this.isTrunOpen = false;
    } else {
      this.isTrunOpen = true;
    }
  }
  closeTrunk() {
    this.isTrunOpen = false;
  }
  go() {
    if (this.isTrunOpen === false) {
      {
        this.speed += 5;
        if (this.speed > 200) {
          this.speed = 200;
        }
      }
    }
  }
  brake() {
    this.speed -= 5;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }
  displayInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed}, Trunk open: ${
        this.isTrunOpen
      }`
    );
  }
}

class RaceCar extends Car {
  acceleration;

  go() {
    if (this.isTrunOpen === false) {
      {
        this.speed += 5;
        if (this.speed > 300) {
          this.speed = 300;
        }
      }
    }
  }
  openTrunk() {
    console.log("Race cars do not have a trunk");
  }

  closeTrunk() {
    console.log("Race cars do not have a trunk");
  }
  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }
}
export const car1 = new Car({ brand: "Toyota", model: "Corolla" });
export const car2 = new Car({ brand: "Tesla", model: "Model 3" });
export const car3 = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

car1.go();
car2.brake();
car1.openTrunk();
car1.brake();
car1.openTrunk();
car1.displayInfo();
car2.displayInfo();
car3.displayInfo();

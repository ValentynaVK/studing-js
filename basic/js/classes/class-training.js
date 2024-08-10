class Car {
  constructor({ model, year, price, speed, isOn = false, engine }) {
    this.model = model;
    this.year = year;
    this.price = price;
    this.speed = speed;
    this.isOn = isOn;
    this.engine = engine;
  }

  getInfoCar() {
    console.log(`This car is ${this.model}, year: ${this.year}`);
  }

  accelerate() {}

  decelerate() {}
}

const camaro = new Car({
  speed: 100,
  year: 2000,
  model: "Chevrolet",
  engine: "V8",
  price: 10000,
});

const mustang = new Car({
  speed: 100,
  year: 2002,
  model: "Ford",
  engine: "V8",
  price: 12000,
});

console.log(camaro);

console.log(mustang);
camaro.getInfoCar();

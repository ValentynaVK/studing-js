class Car {
  constructor({ model, speed, price, nitro = false, maxSpeed }) {
    this.model = model;
    this.speed = speed;
    this.price = price;
    this.nitro = nitro;
    this.maxSpeed = maxSpeed;
  }

  accelerate() {
    this.speed += 20;
  }

  getCarModel() {
    console.log("Model:", this.model);
  }
}
// "Chevrolet", 200, 10000, false, 500
const camaro = new Car({
  speed: 200,
  price: 10000,
  model: "Chevrolet",
  maxSpeed: 500,
});
const mustang = new Car({
  model: "Ford",
  speed: 230,
  price: 10000,
  nitro: true,
  maxSpeed: 400,
});

camaro.getCarModel();

// console.log(camaro);
// console.log(mustang);

// const friends = ["Josh", "Frank"];

// console.log(friends);

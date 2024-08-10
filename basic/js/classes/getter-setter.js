class Car {
  constructor({ model, price }) {
    this._model = model;
    this._price = price;
  }

  set model(value) {
    this._model = value;
  }

  get model() {
    return this._model;
  }
}

const camaro = new Car({ model: "Chevrolet", price: 10000 });

console.log(camaro.model);

camaro.model = "toyota";
console.log(camaro.model);

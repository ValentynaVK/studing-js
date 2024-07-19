const user = {
  name: "Frank",
  age: 100,
  getName() {
    console.log(this.name);
  },
  getProfile() {
    console.log(`${this.name}, ${this.age}`); // Frank, 100 years
  },
  getSettings: () => {
    console.log(`${this.name}, ${this.age}`);
  },
};

// user.getName();
// user.getProfile();
// user.getSettings();

// function sayHello() {
//   console.log(this);
// }

// const sayHelloAgain = function () {
//   console.log(this);
// };

// const sayHelloArrow = () => {
//   console.log(this);
// };

// sayHello();
// sayHelloAgain();
// sayHelloArrow();

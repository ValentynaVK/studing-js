sayHello("John");
//! FUNCTION DECLARATION
function sayHello(name) {
  console.log(`Hello ${name}!`);
}

//! FUNCTION EXPRESSION
const sayHelloAgain = function (name) {
  console.log(`Hello ${name}!`);
};

sayHelloAgain("Milana");

const userGreeting = (name) => {
  console.log(`Hello ${name}!`);
};

userGreeting("Kevin");

const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 5));

const friends = ["Josh", "Frank", "Adam"];

console.log("Our friends: ");

friends.map((el, index) => {
  console.log(`${index + 1} - ${el}`);
});

// Our friends:
// 'Josh'
// 'Frank'
// 'Adam'

const products = [
  { name: "Item1", description: "lorem ipsum isfj skdjf ", quantity: 0 },
  { name: "Item2", description: "lorem ipsum isfj skdjf ", quantity: 10 },
  { name: "Item3", description: "lorem ipsum isfj skdjf ", quantity: 12 },
];

function hello(...args) {}

hello(10, 20, 50, 40);

const productsCopy = [...products];

products
  .filter(({ quantity }) => quantity > 0)
  .sort((a, b) => b.quantity - a.quantity)
  .reduce((acc, { quantity }) => {
    return acc + quantity;
  }, 0);

const names = products.map(({ name }) => name);

const availableProducts = products.filter(({ quantity }) => quantity > 0);

const numbers = [10, 20, 30, 30, 30, 40, 40, 50];

const uniqueElements = numbers.filter(
  (number, index, array) => array.indexOf(number) === index
);

const element = products.find(({ name }) => name === "Item2");

const isAvailable = products.some(({ quantity }) => quantity < 0);

products.forEach((product) => {
  console.log(product);
  // return product;
});

// console.log(isAvailable);

// console.log(element);

// console.log(uniqueElements);
// const set = new Set(numbers);
// console.log(set);

const total = products.reduce((acc, { quantity }) => {
  return acc + quantity;
}, 0);

const sortedProducts = products.sort((a, b) => b.quantity - a.quantity);
console.log(sortedProducts);

const numbers = [1, 5, 4, 3, 1, 10, 3];
//? 1 cпосіб
// const arr = [];

// for (const number of numbers) {
//   if (!arr.includes(number)) {
//     arr.push(number);
//   }
// }

// console.log(arr);

const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);

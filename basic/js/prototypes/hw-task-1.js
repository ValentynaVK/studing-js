// Напиши функцію getCommonKeys(obj1, obj2), яка приймає два об'єкти і повертає
// масив спільних ключів.

const getCommonKeys = function (obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const commonKeys = keys1.filter((key) => keys2.includes(key));
  return commonKeys;
};

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { b: 10, c: 20, d: 30, e: 40 };

console.log(getCommonKeys(obj1, obj2)); // ['b', 'c', 'd']

const obj3 = { x: 5, y: 6, z: 7 };
const obj4 = { a: 1, b: 2, x: 8, y: 9 };

console.log(getCommonKeys(obj3, obj4)); // ['x', 'y']

const obj5 = { a: 1, b: 2 };
const obj6 = { c: 3, d: 4 };

console.log(getCommonKeys(obj5, obj6)); // []

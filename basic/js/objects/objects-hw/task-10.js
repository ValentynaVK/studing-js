// Напиши функцію invertObject(obj), яка створює об'єкт, у якому ключі і значення
// поміняні місцями. Для цього використовуй властивості об'єкта як ключі, а їх
// значення - як нові ключі.

const invertObject = function (obj) {
  const newKeys = {};

  for (const key in obj) {
    // if (obj.hasOwnProperty(key)) {
    const value = obj[key];
    newKeys[value] = key;
    // }
  }

  return newKeys;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
const originalObj1 = { a: "1", b: "2", c: "3" };
console.log(invertObject(originalObj1)); // { '1': 'a', '2': 'b', '3': 'c' }

const originalObj2 = { mango: "fruit", carrot: "vegetable", chicken: "meat" };
console.log(invertObject(originalObj2)); // { fruit: 'mango', vegetable: 'carrot', meat: 'chicken'

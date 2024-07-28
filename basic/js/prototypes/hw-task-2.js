// Напиши функцию combineProperties, которая принимает несколько объектов и
// объединяет их так, чтобы свойства с одинаковыми ключами объединялись в массивы
// значений.

const combineProperties = function (...objects) {
  let result = {};

  for (const obj of objects) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(obj[key]);
      }
    }
  }
  //! 2
  //   objects.forEach((obj) => {
  //     const keys = Object.keys(obj);
  //     keys.forEach((key) => {
  //       if (!result.hasOwnProperty(key)) {
  //         result[key] = [obj[key]];
  //       } else {
  //         result[key].push(obj[key]);
  //       }
  //     });
  //   });

  return result;
};

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 4, b: 5, d: 6 };
const obj3 = { a: 7, e: 8 };

console.log(combineProperties(obj1, obj2, obj3));
// { a: [1, 4, 7], b: [2, 5], c: [3], d: [6], e: [8] }

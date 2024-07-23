// Напиши функцію getCommonKeys(obj1, obj2), яка приймає два об'єкти і повертає
// масив спільних ключів.

// const getCommonKeys = function (obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   const commonKeys = keys1.filter((key) => keys2.includes(key));
//   return commonKeys;
// };

// const obj1 = { a: 1, b: 2, c: 3, d: 4 };
// const obj2 = { b: 10, c: 20, d: 30, e: 40 };

// console.log(getCommonKeys(obj1, obj2)); // ['b', 'c', 'd']

// const obj3 = { x: 5, y: 6, z: 7 };
// const obj4 = { a: 1, b: 2, x: 8, y: 9 };

// console.log(getCommonKeys(obj3, obj4)); // ['x', 'y']

// const obj5 = { a: 1, b: 2 };
// const obj6 = { c: 3, d: 4 };

// console.log(getCommonKeys(obj5, obj6)); // []

// Напиши функцию combineProperties, которая принимает несколько объектов и
// объединяет их так, чтобы свойства с одинаковыми ключами объединялись в массивы
// значений.

// const combineProperties = function (...objects) {
//   let result = {};
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

//   return result;
// };

// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 4, b: 5, d: 6 };
// const obj3 = { a: 7, e: 8 };

// console.log(combineProperties(obj1, obj2, obj3));
// // { a: [1, 4, 7], b: [2, 5], c: [3], d: [6], e: [8] }

// Напиши функцию mergeAllSettings, которая принимает три объекта: объект настроек
// по умолчанию, объект настроек профиля пользователя и объект временных настроек
// сессии. Функция должна возвращать новый объект, который объединяет все три
// объекта. Если в нескольких объектах есть одинаковые ключи, приоритет имеют
// значения из объектов в порядке: временные настройки, настройки профиля,
// настройки по умолчанию.

// const mergeAllSettings = function (
//   defaultSettings,
//   profileSettings,
//   sessionSettings
// ) {
//   let mergedSettings = {};

//   Object.keys(defaultSettings).forEach((key) => {
//     mergedSettings[key] = defaultSettings[key];
//   });

//   Object.keys(profileSettings).forEach((key) => {
//     mergedSettings[key] = profileSettings[key];
//   });

//   Object.keys(sessionSettings).forEach((key) => {
//     mergedSettings[key] = sessionSettings[key];
//   });

//   return mergedSettings;
// };

// const defaultSettings = {
//   theme: "light",
//   language: "en",
//   notifications: true,
// };

// const profileSettings = {
//   theme: "dark",
//   language: "fr",
// };

// const sessionSettings = {
//   notifications: false,
//   privacy: "high",
// };

// console.log(
//   mergeAllSettings(defaultSettings, profileSettings, sessionSettings)
// );
// // { theme: 'dark', language: 'fr', notifications: false, privacy: 'high' }

// const profileSettings2 = {
//   language: "es",
//   fontSize: "medium",
// };

// const sessionSettings2 = {
//   language: "de",
// };

// console.log(
//   mergeAllSettings(defaultSettings, profileSettings2, sessionSettings2)
// );
// // { theme: 'light', language: 'de', notifications: true, fontSize: 'medium' }

// Створіть масив з назвами міст і виведіть їх у консоль з порядковими номерами використовуючи метод map.
const cities = ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro"];

cities.map((city, index) => {
  console.log(`${index + 1}. ${city}`);
});

// У тебе є масив чисел. Використовуючи метод map, виведи в консоль подвоєні значення кожного елемента масиву.
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);

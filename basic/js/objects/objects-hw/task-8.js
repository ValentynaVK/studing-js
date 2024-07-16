// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив
// logins. Логін, який додається повинен:

// - проходити перевірку на довжину від 4 до 16-ти символів включно
// - бути унікальним, тобто бути відсутнім в масиві logins

// Розбий завдання на підзадачі за допомогою функцій.

// Напиши функцію isLoginValid(login), в якій перевір кількість символів
// параметра login і поверни true або false в залежності від того, чи
// потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів
// включно.

// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх
// логінів і логін, який додається, як параметри і перевіряє наявність login в
// массиве allLogins, повертає true якщо такого логіна ще немає і false якщо
// логін вже використовується.

// Напиши функцію addLogin(allLogins, login) яка:

// - Приймає новий логін і масив всіх логінів як параметри
// - Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
// - Якщо логін не валідний, припинити виконання функції addLogin і повернути
//   радок 'Помилка! Логін повинен бути від 4 до 16 символів'
// - Якщо логін валідний, функція addLogin перевіряє унікальність логіна за
//   допомогою функції isLoginUnique
// - Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив
//   масив і повертає рядок 'Такий логін уже використовується!'
// - Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і
//   повертає рядок 'Логін успішно доданий!'

// 🔔 Принцип єдиної відповідальності функції - кожна функція робить щось одне.
// Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в
// одному місці, не зачіпаючи роботу програми в цілому.

// Предикатні функції повертають тільки true або false. Такі функції прийнято
// називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

// - isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true
//   або false.
// - isLoginValid тільки перевіряє чи валідний логін і повертає true або
//   false.
// - addLogin додають чи не додають логін в масив. При цьому для перевірок
//   умови додавання використовує результати викликів інших функцій -
//   isLoginUnique і isLoginValid.

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'

// Напиши функцію mergeObjects(obj1, obj2), яка об'єднує два об'єкти в один. Якщо у
// обох об'єктів є однакові властивості, значення з другого об'єкта повинні
// замінити значення з першого об'єкта. Функція повертає новий об'єкт, який є
// результатом об'єднання.

const mergeObjects = function (obj1, obj2) {
  const merged = {};
  for (let key in obj1) {
    merged[key] = obj1[key];
  }
  for (let key in obj2) {
    merged[key] = obj2[key];
  }
  return merged;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
const objA = { a: 1, b: 2, c: 3 };
const objB = { b: 20, d: 4 };

console.log(mergeObjects(objA, objB)); // { a: 1, b: 20, c: 3, d: 4 }

const objC = { name: "Alice", age: 25 };
const objD = { age: 30, city: "Kyiv" };

console.log(mergeObjects(objC, objD)); // { name: 'Alice', age: 30, city: 'Kyiv'

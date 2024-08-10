import clients from "./clients.js";
// Відсортувати користувачів за віком
// Напиши функцію getUsersSortedByAge(users), яка повертає масив користувачів, відсортованих за віком.

const getUsersSortedByAge = (users) => {
  return users.toSorted((a, b) => {
    return a.age - b.age;
  });
};

const sortedByAge = getUsersSortedByAge(clients);
console.log(sortedByAge); // Відсортований масив користувачі

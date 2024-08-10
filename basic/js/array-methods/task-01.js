import { clients } from "./clients.js";
// Знайти користувачів з певним віком
// Напиши функцію getUsersWithAge(users, age), яка приймає масив користувачів та вік, і повертає масив імен користувачів з вказаним віком.
// const usersWithAge = getUsersWithAge(clients, 25);
// console.log(usersWithAge); // ['Олександр', 'Дмитро']

function getUsersWithAge(users, age) {
  return users.filter((user) => user.age === age).map((user) => user.name);
}

const usersWithAge = getUsersWithAge(clients, 25);
console.log(usersWithAge); // ['Олександр', 'Дмитро']

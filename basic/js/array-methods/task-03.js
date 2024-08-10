import { clients } from "./clients.js";
// Знайти користувачів, що живуть в певному місті
// Напиши функцію getUsersInCity(users, city), яка повертає масив імен користувачів, що живуть у вказаному місті.

const getUsersInCity = (users, city) => {
  return users.filter((user) => user.city === city).map(({ name }) => name);
};

const usersInKyiv = getUsersInCity(clients, "Київ");
console.log(usersInKyiv); // ['Олександр', 'Ірина']

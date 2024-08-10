import { clients } from "./clients.js";

// Знайти всіх унікальних друзів
// Напиши функцію getUniqueFriends(users), яка повертає масив унікальних імен друзів всіх користувачів.

const getUniqueFriends = (users) => {
  return users
    .reduce((acc, { friends }) => {
      return [...acc, ...friends];
    }, [])
    .filter((user, i, arr) => arr.indexOf(user) === i);
};

const uniqueFriends = getUniqueFriends(clients);
console.log(uniqueFriends); // ['Дмитро', 'Марія', 'Ірина', 'Олексій', 'Олександр']

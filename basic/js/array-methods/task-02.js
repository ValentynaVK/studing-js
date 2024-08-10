import { clients } from "./clients.js";

// Підрахувати загальну кількість друзів у всіх користувачів
// Напиши функцію getTotalFriendsCount(users), яка повертає загальну кількість друзів у всіх користувачів.

function getTotalFriendsCount(clients) {
  return clients.reduce((acc, client) => {
    return acc + client.friends.length;
  }, 0);
}

const totalFriends = getTotalFriendsCount(clients);
console.log(totalFriends); // 9

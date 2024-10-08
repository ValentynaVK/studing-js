import { users } from "./users.js";

// Масив імен (поле `name`) людей, відсортованих в залежності від кількості їх
// друзів (поле `friends`)

const getNamesSortedByFriendsCount = (users) => {
  return users
    .toSorted((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

import { users } from "./users.js";

// Отримати масив всіх умінь всіх користувачів (поле `skills`), при цьому не має
// бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, user) => [...acc, ...user.skills], [])
    .filter((skill, index, array) => array.indexOf(skill) === index)
    .toSorted();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

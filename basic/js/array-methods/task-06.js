import clients from "./clients.js";

// Знайти користувачів з певними навичками
// Напиши функцію getUsersWithSkills(users, requiredSkills), яка повертає масив імен користувачів, що мають всі вказані навички.

const getUsersWithSkills = (users, requiredSkills) => {
  return users
    .filter(({ skills }) =>
      requiredSkills.every((skill) => skills.includes(skill))
    )
    .map(({ name }) => name);
};

const usersWithSkills = getUsersWithSkills(clients, ["JavaScript", "Node.js"]);
console.log(usersWithSkills); // ['Олександр', 'Ірина']

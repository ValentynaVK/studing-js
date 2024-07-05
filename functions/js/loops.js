const users = ["John", "Josh", "Peter", "Frank", "Milana"];

// for (const user of users) {
//   console.log(user);
// }

for (let i = 0; i < users.length; i += 1) {
  if (users[i] === "Peter") {
    continue;
  }

  users[i] += " Smith";
}

console.log(users); // ["John Smith", "Josh Smith", "Peter", "Frank Smith", "Milana Smith"]

const friends = ["Josh", "Frank", "Adam"];

console.log("Our friends: ");

friends.map((el, index) => {
  console.log(`${index + 1} - ${el}`);
});

// Our friends:
// 'Josh'
// 'Frank'
// 'Adam'

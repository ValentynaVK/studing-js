const obj = {
  name: "Josh",
  age: 70,
  stats: {
    followers: 200,
    likes: 100,
  },
};

const copyObj = JSON.parse(JSON.stringify(obj));

console.log(copyObj);

obj.name = "Pablo";
obj.stats.followers = 1000;

// console.log(copyObj.name);
// console.log(copyObj.stats.followers);

const names = ["Josh", "Frank"];

const { name, age, stats } = obj;
console.log(name, age, stats);

const [name1, name2] = names;
console.log(name1);

Object.keys(obj);

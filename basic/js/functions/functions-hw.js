const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
};
/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120
// ================================= TASK - 2 ===========================================
const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
// ================================ TASK-3 ===========================================
const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // повернеться оригінальний рядок

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // повернеться форматований рядок

// console.log(formatString("Curabitur ligula sapien."));
// // повернеться оригінальний рядок

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// повернеться форматований рядок
// =============================== TASK - 4 ==============================
const checkForSpam = function (message) {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
};
/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// ============================= TASK - 5 ===============================
let input;
const numbers = [];
let total = 0;

// while (true) {
//   input = prompt("Введіть число");
//   if (input === null) {
//     break;
//   }

//   const number = Number(input);
//   if (Number.isNaN(number)) {
//     alert("Було введено не число, спробуйте ще раз");
//     continue;
//   }
//   numbers.push(number);
// }

for (let number of numbers) {
  total += number;
}

console.log(`Загальна сума чисел дорівнює ${total}`);

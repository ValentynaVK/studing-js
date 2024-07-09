// # Завдання 3

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому
// рядку.

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

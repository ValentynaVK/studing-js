// Підрахунок кількості голосних у масиві слів

// У вас є масив слів. Потрібно підрахувати загальну кількість голосних (a, e, i,
// o, u) у всіх словах масиву.

let words = ["apple", "orange", "banana", "grape"];

let totalVowels = 0;

words.forEach((word) => {
  const lettersArr = word.split("");

  lettersArr.forEach((letter) => {
    if ("aeiou".includes(letter.toLowerCase())) {
      totalVowels += 1;
    }
  });
});

console.log(totalVowels); // Виведе: 10

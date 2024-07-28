// Створіть масив з назвами міст і виведіть їх у консоль з порядковими номерами використовуючи метод map.
const cities = ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro"];

cities.map((city, index) => {
  console.log(`${index + 1}. ${city}`);
});

// У тебе є масив чисел. Використовуючи метод map, виведи в консоль подвоєні значення кожного елемента масиву.
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);

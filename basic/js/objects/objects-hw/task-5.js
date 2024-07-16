// Напиши функцію `calculateTotalPrice(allProdcuts, productName)`, яка отримує
// масив об'єктів та ім'я продукту (значення властивості `name`). Повертає загальну
// вартість продукту (ціна \* кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const products = [
  { name: "Радар", price: 1300, quantity: 4 }, // { name, price, quantity }
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let total = 0;

  // деструктуризація в for
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      total = price * quantity;
    }
  }
  return total;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроїд")); // 2800

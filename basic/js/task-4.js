let credits = 23580;
const pricePerDroid = 3000;
let message = prompt("Введіть кількість дроїдів, які ви хочете купити:");
let quantity = Number(message);
if (message === null) {
  console.log("Скасовано користувачем!");
} else {
  let totalPrice = quantity * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    credits -= totalPrice;
    console.log(
      `Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits} кредитів.`
    );
  }
}

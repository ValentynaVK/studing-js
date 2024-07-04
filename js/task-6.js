let total = 0;
let input;

while (true) {
  input = prompt("Введіть число:");
  if (input === null) {
    break;
  }
  let number = Number(input);
  if (!isNaN(number)) {
    total += number;
  } else {
    alert("Було написано не число, спробуйте ще раз");
  }
}
alert(`Загальна сума чисел дорівнює ${total}`);

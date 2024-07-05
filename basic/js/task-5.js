let deliverTo = prompt(
  "Введіть назву вашої країни для розрахунку вартості доставки:"
).toLowerCase();
let deliveryPrice;

switch (deliverTo) {
  case "китай":
    deliveryPrice = 100;
    break;
  case "чилі":
    deliveryPrice = 250;
    break;
  case "австралія":
    deliveryPrice = 170;
    break;
  case "індія":
    deliveryPrice = 80;
    break;
  case "ямайка":
    deliveryPrice = 120;
    break;
  default:
    alert("У вашій країні доставка недоступна");
    break;
}

if (deliveryPrice !== undefined) {
  console.log(
    `Доставка в ${deliverTo} буде коштувати ${deliveryPrice} кредитів.`
  );
}

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція
// рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта,
// переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
  const countTotalSalary = function (employees) {
    let totalSalary = 0;
    for (let employee in employees) {
      totalSalary += employees[employee];
    }
    return totalSalary;
  };
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      amount,
      type,
    };

    return transaction;
  },

  deposit(amount) {
    this.balance += amount;

    const transactionDeposit = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );

    this.transactions.push(transactionDeposit);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return "Недостатньо коштів";
    }

    this.balance -= amount;
    const transactionWithdraw = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );

    this.transactions.push(transactionWithdraw);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions[id - 1];
  },

  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }

    return total;
  },
};

console.log(account.deposit(100));
console.log(account.withdraw(20));
console.log(account.withdraw(10));
console.log(account.withdraw(20));
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal("withdraw"));

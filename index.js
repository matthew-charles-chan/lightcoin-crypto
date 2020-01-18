class Account {
  constructor() {
    this.transactions = [];
  }
  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (!this.isAllowed()) {
      return false;
    }
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }
}



const myAccount = new Account();
const yourAccount = new  Account();
console.log(myAccount);
console.log(myAccount.balance);

const t1 = new Deposit(50, myAccount);
t1.commit();
console.log(myAccount);
console.log(myAccount.balance);
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
console.log("---------------------------------------------");
const t4 = new Withdrawal(50.25, myAccount);
t4.commit();
console.log('Transaction 1:', t4);
console.log(myAccount.balance);
console.log(myAccount);
console.log("---------------------------------------------");
console.log("---------------------------------------------");
const t5 = new Deposit(100, yourAccount);
t5.commit();
console.log(yourAccount.balance);
// t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

// console.log('Balance:', myAccount.balance);

// t3 = new Deposit(120.00, myAccount);
// console.log(t3)
// t3.commit();
// console.log('Transaction 3:', t3);
// console.log("Balance: ", myAccount.balance);

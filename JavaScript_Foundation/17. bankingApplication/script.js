const customer = { name: "Kartik Chandra Sahu", balance: 5000 };

function deposit(amount) {
    this.balance += amount;
    return `The Deposit of ${amount} is successfull and New balance is ${this.balance}`
}

function withdraw(amount) {
    if (this.balance < amount) {
        return "Insufficient Balance"
    }
    this.balance -= amount
    return `The Withdraw of ${amount} is successfull and New balance is ${this.balance}`
}

console.log(deposit.call(customer, 6500));
console.log(withdraw.call(customer, 500));
console.log("Total Balance is "+customer.balance);
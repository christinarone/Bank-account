const assert = require("assert")

class BankAccount{
    constructor (accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = []
    }

    balance(){
        if (this.transactions.length === 0){
            return 0
        }
        let amountArr = this.transactions.map(item => {
            return item.amount 
        })
        let totalAmount = amountArr.reduce((total, num)=> {
            return total + num
        })
        console.log("Your current balance is: ", totalAmount)
        return totalAmount
    }
    deposit(amount, payee){
        if(amount < 0){
            console.log("deposit must be > than $0")
        } else{
            const transaction = new Transaction(amount, payee)
            this.transactions.push(transaction)
        }
        this.balance()
    }
    charge(amount, payee){
        if(amount > 0){
            console.log("charge must be < than $0")
        } else{
            const transaction = new Transaction(amount, payee)
            this.transactions.push(transaction)
        }
        this.balance()

    }

}

class Transaction{
    constructor (amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}

const cesar = new BankAccount('00066655', 'Cesar')
console.log(cesar)

cesar.deposit(30, 'deposit')
console.log(cesar)

cesar.deposit(-30, 'deposit')
console.log(cesar)

cesar.charge(-20, 'Target')
console.log(cesar)

cesar.charge(20, 'Target')
console.log(cesar)

// const deposit = new Transaction(30, 'deposit')
// console.log(deposit)

// let array = []

// console.log(array)

// array.push(66)

// console.log(array)

if (typeof describe === "function"){
    describe("BankAccount", function(){
        it("should have an account number, owner's name, transaction list",function(){
            const bankAccount1 = new BankAccount("12345678","Christina")
            assert.equal(bankAccount1.accountNumber, "12345678")
            assert.equal(bankAccount1.owner, "Christina")
            assert.equal(bankAccount1.transactions.length, 0)
            assert.equal(bankAccount1.balance(), 0)
        })
    

    })
    describe ("Transaction", function(){
        it("should have a date, amount, and payee", function(){
            const transaction1 = new Transaction(34,"deposit")
            assert.notEqual(transaction1.date, null)
            assert.equal(transaction1.amount, 34)
            assert.equal(transaction1.payee, "deposit")
        })
    })
}
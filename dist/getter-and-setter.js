"use strict";
{
    // getter and setter
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id,
                this.name = name,
                this._balance = balance;
        }
        depositBalance(ammount) {
            return this._balance = this._balance + ammount;
        }
        set newDeposite(newAmmount) {
            this._balance = this._balance + newAmmount;
        }
        get newBalance() {
            return this._balance;
        }
    }
    const person1 = new BankAccount(3234, 'Mr. X', 100);
    // console.log(person1._balance)
    person1.newDeposite = 104;
    const getDepositBalance = person1.newBalance;
    console.log(getDepositBalance);
}

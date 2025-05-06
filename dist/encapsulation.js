"use strict";
{
    // Encapsulation mane hocche kono gopon kora/privet kora/hidden kora.
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id,
                this.name = name,
                this._balance = balance;
        }
        depositBalance(ammount) {
            return this._balance = this._balance + ammount;
        }
    }
    const person1 = new BankAccount(3234, 'Mr. X', 100);
    // console.log(person1.balance)
    const getDepositBalance = person1.depositBalance(200);
    console.log(getDepositBalance);
}

{
    // access modifiers

    class BankAccount {
        private readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id,
            this.name = name,
            this._balance = balance
        }

    depositBalance (ammount: number) {
       return this._balance = this._balance + ammount;
    }        

    }

    const person1 = new BankAccount (3234, 'Mr. X', 100);
    // console.log(person1.balance)
    const getDepositBalance = person1.depositBalance(200);
    console.log(getDepositBalance);

}
{
    // OOP inheritence typescript

    class Parents  {
        name: string;
        address: string;
        tribe: string;

        constructor(name: string, address: string, tribe: string) {
            this.name = name,
            this.address = address,
            this.tribe = tribe
        }
        getSleep(sleepingHour: string) {
            console.log(`${this.name} will sleep for ${sleepingHour}`);
        }
    }

    class FirstChild extends Parents {
        income: number;
        constructor(name: string, address: string, tribe: string, income: number) {
            super(name, address, tribe)
            this.income = income
        }
    }
    const firstChild = new FirstChild('Mr. Good', 'Baaper bari', 'Bidesh', 40000);
    // firstChild.getSleep('8hr');
    // console.log(`${firstChild.name} thake ${firstChild.address} dreem country ${firstChild.tribe} and mountly income ${firstChild.income}`)

    class SecondChild extends Parents {
        constructor(name: string, address: string, tribe: string) {
            super(name, address, tribe)
        }
    }
    const secondChild = new SecondChild('Mr. Bad', 'Baaper bari', 'Europ');
    secondChild.getSleep('10hr')
    
}
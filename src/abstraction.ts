{
    // abstraction  : 1. interface 2. abstract

    // Idea
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void
    }

    // Real Implemention
    class Car implements Vehicle {
        startEngine(): void {
            console.log('Car is started')
        }
        stopEngine(): void {
            console.log('Car engine is stoped');
        }
        move(): void {
            console.log('Car is running now!')
        }
        test() {
            console.log(`I am just testing`);
        }
    }

    const toyotaCar = new Car();
    toyotaCar.move()

    // Abstraction

    // Idea
    abstract class Vehicle2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log(`I am just testing`);
        }
    }
    class Car2 extends Vehicle2 {
        startEngine(): void {
            console.log('I am starting the car Engine')
        }
        stopEngine(): void {
            console.log('I am stoped the car Engine');
        }
        move(): void {
            console.log('I am moving the car on the street')
        }
    }

    const frodaCar = new Car2;
    frodaCar.startEngine()
}
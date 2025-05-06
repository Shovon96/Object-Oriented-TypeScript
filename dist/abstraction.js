"use strict";
{
    // Real Implemention
    class Car {
        startEngine() {
            console.log('Car is started');
        }
        stopEngine() {
            console.log('Car engine is stoped');
        }
        move() {
            console.log('Car is running now!');
        }
        test() {
            console.log(`I am just testing`);
        }
    }
    const toyotaCar = new Car();
    toyotaCar.move();
    // Abstraction
    // Idea
    class Vehicle2 {
        test() {
            console.log(`I am just testing`);
        }
    }
    class Car2 extends Vehicle2 {
        startEngine() {
            console.log('I am starting the car Engine');
        }
        stopEngine() {
            console.log('I am stoped the car Engine');
        }
        move() {
            console.log('I am moving the car on the street');
        }
    }
    const frodaCar = new Car2;
    frodaCar.startEngine();
}

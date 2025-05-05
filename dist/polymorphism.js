"use strict";
{
    // Polymorphism
    class Person {
        getSleep() {
            console.log('I am sleeping 10hr in regullarly');
        }
    }
    class Students extends Person {
        getSleep() {
            console.log('I am sleeping 8hr in everyday');
        }
    }
    class Developers extends Person {
        getSleep() {
            console.log('I am sleeping 7hr in everyday');
        }
    }
    const getSleepingHours = (param) => {
        param.getSleep();
    };
    const person = new Person();
    const students = new Students();
    const developers = new Developers();
    getSleepingHours(person);
    getSleepingHours(students);
    getSleepingHours(developers);
    // One more example for Polymorphism
    class Shap {
        getArea() {
            return 0;
        }
    }
    // circle er besh PI * r * r
    class Circle extends Shap {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Reactangle extends Shap {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShapArea = (param) => {
        console.log(param.getArea());
    };
    const shape = new Shap();
    const circle = new Circle(50);
    const reactangle = new Reactangle(20, 30);
    getShapArea(shape);
    getShapArea(circle);
    getShapArea(reactangle);
}

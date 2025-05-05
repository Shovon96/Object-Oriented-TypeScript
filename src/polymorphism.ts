{
    // Polymorphism
    class Person {
        getSleep(){
            console.log('I am sleeping 10hr in regullarly')
        }
    }

    class Students extends Person {
        getSleep() {
            console.log('I am sleeping 8hr in everyday')
        }
    }

    class Developers extends Person {
        getSleep() {
            console.log('I am sleeping 7hr in everyday')
        }
    }

    const getSleepingHours = (param: Person) => {
        param.getSleep()
    }

    const person = new Person()
    const students = new Students()
    const developers = new Developers()

    getSleepingHours(person)
    getSleepingHours(students)
    getSleepingHours(developers)



    // One more example for Polymorphism
    class Shap {
        getArea() {
            return 0;
        }
    }

    // circle er besh PI * r * r
    class Circle extends Shap {
        radius: number;
        constructor(radius: number) {
            super()
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    }

    class Reactangle extends Shap {
        height: number;
        width: number;
        constructor (height: number, width: number) {
            super()
            this.height = height;
            this.width = width;
        }

        getArea() :number {
            return this.height * this.width;
        }
    }

    const getShapArea = (param: Shap) => {
        console.log(param.getArea())
    }

    const shape = new Shap();
    const circle = new Circle(50);
    const reactangle = new Reactangle(20, 30);
    
    getShapArea(shape);
    getShapArea(circle);
    getShapArea(reactangle);

}
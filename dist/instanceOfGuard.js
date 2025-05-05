"use strict";
{
    // instanceof guard
    class Animal {
        constructor(name, speacies) {
            this.name = name;
            this.speacies = speacies;
        }
        makeSound() {
            console.log('I am making sound');
        }
    }
    class Dog extends Animal {
        constructor(name, speacies) {
            super(name, speacies);
        }
        makeBark() {
            console.log('I am barking Gew gew...');
        }
    }
    class Cat extends Animal {
        constructor(name, speacies) {
            super(name, speacies);
        }
        makeMew() {
            console.log('I am barking mew mew...');
        }
    }
    // const getAnimal = (animal: Animal) => {
    //     if(animal instanceof Dog){
    //         animal.makeBark()
    //     }else if(animal instanceof Cat){
    //         animal.makeMew()
    //     }else {
    //         animal.makeSound()
    //     }
    // }
    // Smart way te handle korar jonno use function
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog('Perry', 'dog');
    const cat = new Cat('Cherry', 'Cat');
    getAnimal(cat);
}

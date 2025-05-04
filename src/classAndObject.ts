{

// Class and object

    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound
        }
    }

    // make this Class shortest using 
    class Animal2 {
        constructor(public name: string, public species: string, public sound: string) {}
            makeSound () {
                console.log(`The ${this.name} has sound ${this.sound}`)
        }
    }

    const dog = new Animal('Buldozer', 'Dog', 'Ghew Ghew');
    const cat = new Animal('Bervly', 'Cat', 'Mew mew');

    const dog2 = new Animal2('Buldozer', 'Dog', 'Ghew Ghew');
    const cat2 = new Animal2('Bervly', 'Cat', 'Mew mew');
    
    dog2.makeSound();
}
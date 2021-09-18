// What is the result of running this code?

// 1 min to read
// 30 sec to answer

class Animal {
    constructor(angry) {
        this.angry = angry;
        this.hunger = 10;
    }

    speak() {
        if (this.angry) {
            console.log('ROAR');
        } else {
            console.log('grrr');
        }

        this.hunger++;
    }

    eat(amtOfFood) {
        this.hunger -= amtOfFood;
    }
}

class Dog extends Animal {
    constructor() {
        super(false)
    }

    eat(amtOfFood) {
        super.eat(2 * amtOfFood)
    }
}

const dog = new Dog();
dog.speak(); // -> grrr
dog.eat(3);  
console.log(dog.hunger); // -> 6
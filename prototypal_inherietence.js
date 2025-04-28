/// without ES6 Prototypal Inheritance

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} is very noice.`);
}

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

/// Set up prototypal inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.contructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} bark.`);
}

let rox = new Dog("rox", "german shaperd");
rox.speak();
rox.bark();



/// without ES6 Prototypal Inheritance (Another way to create objects with a specific prototype.)

const Animal = {
    speak() {
        console.log(`${this.name} is very noice.`);
    }
};

const dog = Object.create(Animal);
dog.name = "Buddy";
dog.bark = function() {
    console.log(`${this.name} barks.`);
}

dog.speak();
dog.bark();



/// with ES6 Prototypal Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} is very noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} bark`);
    }
}

const rex = new Dog('rex', 'german shaperd')
rex.speak();
rex.bark();



// Task 1: Constructor Function and Prototype Methods
// Create a constructor function for a Car that takes make and model as parameters and add a method to its prototype to display car details.

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.displayInfo = function () {
    console.log(`This car company is ${this.make} and model is ${this.model}.`);
}

let car1 = new Car("Maruti suzuki", "zen");
let car2 = new Car("Nexa", "scross");

car1.displayInfo();
car2.displayInfo();



/// Task 2: ES6 Classes and Inheritance
/// Use ES6 classes to create a base class Animal and a subclass Cat that extends Animal.

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is create a noice.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log(`${this.name} says meow!`);
    }
}

const kitty = new Cat('Kitty', "orange");
kitty.speak();
kitty.meow();



/// Task 3: Exploring the Prototype Chain
/// Investigate the prototype chain of an object.

function Gadget(name) {
    this.name = name;
}

Gadget.prototype.getInfo = function () {
    return `Gadgets: ${this.name}`;
}

const gadget = new Gadget('Smartphone');

console.log(gadget.getInfo());
console.log(Object.getPrototypeOf(gadget));
console.log(gadget.__proto__);
console.log(Object.getPrototypeOf(gadget.__proto__));



/// Task 4: Object.create and Direct Prototypal Inheritance
/// Use Object.create to create a new object that inherits from an existing object.

const Vehicles = {
    start() {
        return `${this.type} is starting.`;
    }
}

const bike = Object.create(Vehicles);
bike.type = "Four-wheels";
bike.wheel = 4;

console.log(bike.start());
/// Object Literals:

const person = {
    name: "mayur",
    age: 28,
    greet() {
        console.log(`hello, ${this.name}`);
    }
};

person.greet();



/// Constructor Functions:

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`good day, ${this.name}`);
}

const per = new Person("ram", 30);
per.greet();



/// ES6 Classes:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hi, I am ${this.name}`);
    }
}

const pers = new Person("amit", 70);
pers.greet();
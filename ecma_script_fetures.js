/// let and const
/// -> let allows you to declare block-scoped variables. They can be reassigned.
/// -> const declares block-scoped constants. Once assigned, their binding cannot be changed (though objects and arrays declared with const can have their contents modified).

{
    let a = 25;
    const b = 20;
    a = 50
    console.log(`a value is ${a}`);
    b = 25
    console.log(`b value is ${b}`);
}



/// Arrow Functions

// Traditional function declare

const add = function (val1, val2) {
    return val1 + val2;
}

const addWithArrow = (val1, val2) => val1 + val2;

console.log(add(2, 3));
console.log(addWithArrow(3, 2));



/// Template Literals

const name = "sodhi"
const age = 35;

const intro = `hello friends, ${name} is gokuldham society member. he age is ${age}.`;
console.log(intro);

const multiLineStr = `hello friens,
good morning,
my name is sodhi.`;
console.log(multiLineStr);



/// Destructuring Assignment
/// Destructuring allows you to extract values from arrays or properties from objects into distinct variables, making code more concise and readable.

// Array Destructuring:
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third);

// Object Destructuring:
const person = {
    nam: 'bob',
    age: 36,
    city: 'new york'
}

const { nam, city } = person;
console.log(nam, city);



/// Spread and Rest Operators

// Spread:
const listA = [1, 2, 3];
const listB = [4, 5, 6];

const mergeListAB = [...listA, ...listB];
console.log(mergeListAB);

// Rest:
const sum = (...numbers) => numbers.reduce((prev, curr) => prev * curr, 1);
console.log(sum(3, 6, 5));



///  Default Parameters

const greeting = (name = "Guest") => `Hello, ${name}.`;
console.log(greeting('tarrak'));
console.log(greeting());



/// Enhanced Object Literals

const name2 = "abdul";
let age2 = 25;

const person2 = {
    name,
    age,
    greet() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}.`);
    }
}

person2.greet();



/// Task 1: let/const and Block Scope
/// Demonstrate the difference in scoping between let and var inside a block.

{
    var varVar = "Hello";
    let letVar = "hi"
}

console.log(varVar);
console.log(letVar);



/// Task 2: Rewrite a Function Using an Arrow Function
/// Convert a traditional function expression into an arrow function.

// Traditional declaration
const multiply = function (a, b) {
    return a * b;
};

// arrow function
const multiplyWithArrow = (a, b) => a * b;
console.log(`traditional methos ${multiply(5, 5)}`);
console.log(`new with arrow function ${multiplyWithArrow(3, 3)}`);



/// Task 3: Create a Multi-line Template Literal
/// Use template literals to create a string that spans multiple lines and includes variable interpolation.

const name1 = "Dana";
const hobby = "painting";
const message = `Hi, my name is ${name1}.`

console.log(`${message}
my hobby is ${hobby}`);



/// Task 4: Destructuring and the Spread Operator
/// Practice array and object destructuring, and use the spread operator to merge arrays.

// Array destructuring
const rgb = [255, 210, 0];
const [red, green, blue] = rgb;
console.log(red, green, blue);

// Merging arrays using spread
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "lettuce"];
const food = [...fruits, ...vegetables];
console.log(food);



/// Task 5: Function with Default Parameters and Rest Operator
/// Write a function that uses default parameters and the rest operator.

const greeting1 = function (name = "Unknown", ...values) {
    console.log(`${name}, ${values.join(', ')}!`);
}

greeting1(undefined, "bharat", "ramesh", 'suresh');
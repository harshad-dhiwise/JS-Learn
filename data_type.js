/// PRIMITIVE DATA-TYPE

/// Number data type

let weight = 45;
let height = 6.5;

console.log(weight);
console.log(height);

/// String data type

let greet = "Hello world";
let programmingLanguage = "JavaScript";

console.log(greet);
console.log(programmingLanguage);

/// Boolean

let right = true;
let wrong = false;

console.log(right);
console.log(wrong);

/// Undefined

let notDefined = undefined;

console.log(notDefined);

/// null

let nullableVal = null;

console.log(nullableVal);

/// symbol (ES6)

let symbl = Symbol("hello");
let symb1 = Symbol('hello');

console.log(symb1 === symbl);

/// REFERENCE DATA TYPES

let student = {
    name: "raj",
    age: 18,
    isMarried: false,
}

console.log(student.name);
console.log(student.age);
console.log(student.isMarried);

/// Array

let arr = [1, 2, 3, 3, 4, 4, 5, 5, "hello", true, Symbol("r1")];

console.log(arr);

/// Function

function greeting(params) {
    console.log("Have a good day.");
}

greeting();

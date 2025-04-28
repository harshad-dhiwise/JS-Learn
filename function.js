/// Function Declarations

function greetDec(name) {
    console.log(`Hello, ${name}`);
}



/// Function Expressions

const greetExpe = function (name) {
    return `Hello, ${name}!`;
};



/// Arrow Functions (ES6+)

const greetFunEs6 = (name) => {
    return `Hello, ${name}!`;
}

const greetSingleLineExpre = (name) => `Hello, ${name}!`;



/// Function Parameters & Arguments

function addParaAndArgu(a, b) {
    return a + b;
}

console.log(addParaAndArgu(4, 5));



/// Return Statement

function multiplyRetu(x, y) {
    return x * y;
}

console.log(multiplyRetu(5, 5));


/// Task 1: Basic Function Creation
/// Create a function that takes two numbers as parameters and returns their sum.

function sum(a, b) {
    console.log(`a + b = ${a+b}`);
}

sum(2, 2);
sum(100, 50)



/// Task 2: Exploring Function Scope
/// Understand how function scope works by creating variables inside and outside a function.

let globalVariable = "Outer variable.";

function checkFunScope() {
    let innerVariable = "Inner variable.";
    console.log(innerVariable);
    console.log(globalVariable);
}

checkFunScope();

console.log(innerVariable);

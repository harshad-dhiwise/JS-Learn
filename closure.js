function greeting(greetingMsg) {
    return function (name) {
        return `${greetingMsg} ${name}`;
    }
}

let greet1 = greeting("good morning,");
console.log(greet1("champak"));

let greet2 = greeting("have a nice day");
console.log(greet2("tapu"));



/// Task 1: Simple Closure Example
/// Create a function that returns another function which logs a message that includes a variable from its outer function.

function voter() {
    let age = 18;

    return function () {
        return `hi, I am natukaka and my age is ${age}.`
    }
}

let v = voter();
console.log();



/// Task 2: Creating a Counter with a Closure
/// Write a function that creates a counter. Each time you call the returned function, it should increment and display the count.

function counterFunc() {
    let counter = 0;

    return function () {
        counter++;
        console.log(`counter value is, ${counter}`);
    }
}

let cf = counterFunc();
cf();
cf();
cf();

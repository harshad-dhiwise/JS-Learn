/// Console Methods

const users = [
    { name: "bob", age: 15, },
    { name: "alice", age: 18, }
];

console.table(users);



/// Using the debugger Statement

function calculate(a, b) {
    const additionRes = a + b;
    debugger;
    return additionRes;
}

calculate(5, 3);



/// Task 1: Debugger Usage
/// Use the debugger statement to step through a function and inspect variable values.

function factorial(val) {
    if (val < 0) {
        throw new Error("Invalid value.");
    }

    if (val == 1) {
        return 1;
    }

    debugger;
    return val * factorial(val - 1);
}

console.log(factorial(5));



/// Task 2: Promise Error Handling
/// Create a Promise that intentionally rejects and handle the error with .catch().

function simulateError() {
    return new Promise((resolve, reject) => {
        reject(new Error("Something went wrong."));
    }, 1000);
}

simulateError().then(data => console.log(data)
).catch(err => console.error(err)
);
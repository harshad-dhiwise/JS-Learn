/// Pure Functions
const add = (a, b) => a + b;
console.log(add(2, 3));



/// Immutability
const list1 = [1, 2, 3];
const finalList = [...list1, 4];
console.log(list1);
console.log(finalList);



/// First-Class Functions: Assigning function to a variable
const greet = (name) => `hello, ${name}`;
console.log(greet("shyam"));



/// Higher-Order Function: A function that accepts another function
const repeat = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn(i);
    }
}

repeat(i => console.log(`Iteration of ${i}`), 5);



/// Function Composition
/// Function composition is the process of combining two or more functions to produce a new function. The output of one function becomes the input of the next.
const double = x => x * 2;
const square = x => x * x;

const squareOfDouble = x => square(double(x));

console.log(squareOfDouble(3)); // (3 * 2) = 6; 6 * 6 = 36



/// Currying
const mult = (a, b) => a * b;
const multipy = a => b => a * b;

const mul = multipy(5);
console.log(mul(3));



/// Recursion
const factorial = n => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(4));



/// Declarative vs. Imperative Programming
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers);



/// Task 1: Write a Pure Function
/// Create a pure function that converts a temperature in Celsius to Fahrenheit.
const celsiusToFahrenheit = cel => (cel * (9 / 5)) + 32;
console.log(celsiusToFahrenheit(3));
console.log(celsiusToFahrenheit(0));



/// Task 2: Practice Immutability
/// Create a function that adds an item to an array without modifying the original array.
const addItem = (array, item) => [...array, item];

const lst1 = [1, 2, 3];
console.log(lst1);
console.log(addItem(lst1, 4));



/// Task 3: Higher-Order Functions with Array Methods
/// Use higher-order functions to process an array.
const numbersOfArr = [1, 2, 3, 4, 5];
const doubled = numbersOfArr.map((n => n * 2));
const evenDoubled = doubled.filter(val => val % 2 === 0);
const sumOfNo = evenDoubled.reduce((prev, curr) => prev + curr, 0);

console.log(doubled);
console.log(evenDoubled);
console.log(sumOfNo);



/// Task 4: Function Composition
/// Compose two or more functions to create a new function.

const addit = x => x + 3;
const mulBy2 = x => x * 2;

const combineOfAddAndMul = y => mulBy2(addit(y));

console.log(combineOfAddAndMul(4));



/// Task 5: Currying a Function
/// Convert a function that adds three numbers into a curried function.

const addThreeNumbers = (a, b, c) => a + b + c;

const addThreeNo = a => b => c => a + b + c;

const add1 = addThreeNo(5);
const add2 = add1(5);
console.log(add2(5));
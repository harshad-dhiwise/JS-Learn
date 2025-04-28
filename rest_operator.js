const sum = (...values) => values.reduce((prev, curr) => prev + curr, 0);

console.log(sum(2, 3, 4, 1));

// Array Rest:

const fruits = ["apple", "banana", "lichi", "dragon", "pinepple"];

const [firstFruit, secondFruit, ...remainFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(remainFruit);

// Object Rest:

const settings = { theme: "Light", notification: true, version: '1.0.0' };
const { theme, ...remainSettings } = settings;

console.log(theme);
console.log(remainSettings);



/// Task 1: Function with Rest Operator
/// Create a function that calculates the average of any number of numeric arguments.

const average = (...numbers) => numbers.reduce((prev, curr) => (prev + curr) / 2);

console.log(average(2, 1));
/// For Loop

for (let i = 0; i < 5; i++) {
    console.log(`value ${i + 1}`);
}



/// While Loop

let index = 0;

while (index < 5) {
    console.log(`index ${index}`);
    index++;
}



/// Do...While Loop

let counter = 0;

do {
    console.log(`counter value is ${counter}`);
    counter++;
} while (counter < 5);



/// For...in loops

const person = {
    "name": "jethalal",
    "age": 20,
    "gender": "male",
}

for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(`person ${key} is ${element}.`);
    }
}



/// for...of

let programmingLanguage = ["js", "ts", "java", "python", "R", "scala"];

for (const element of programmingLanguage) {
    console.log(element);
}



// Task 1: Number Countdown Using a While Loop

let val = 10;

while (val > 0) {
    console.log(`value is ${val}`);
    val--;
}

console.log("Boom!");



/// Task 2: Iterating Over an Array with For...of

let fruits = ["apple", "orange", "popaganda", "staweberry", "pinepale"];
let count = 0

for(let i of fruits) {
    count++;
    console.log(`fruit ${count} ${i}`);
    
}

console.log("End of the fruit basket!");



/// Task 3: Object Property Iteration with For...in

const car = {
    "model name": "Innova",
    "company name": "Toyoto",
    "price": 4000000,
}

for(let i in car) {
    console.log(`car ${i} is ${car[i]}.`);
    
}
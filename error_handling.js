/// Try/Catch/Finally

try {
    const div = 4 / 0;
    console.log(div);
} catch (error) {
    console.error(`Something went wrong: ${error}`);
} finally {
    console.log("Must execute this code.");
}



/// Throwing Custom Errors

function divide(a, b) {
    if (b === 0) {
        throw new Error("not divisiable by zero.");
    }

    return a / b;
}

console.log(divide(2, 2));



/// Handling Asynchronous Errors

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to load data.");
    }
}

fetchData();



/// Task 1: Basic Try/Catch Example
/// Create a function that attempts to parse a JSON string and handles errors if the JSON is invalid.

function parseJson(jsonString) {
    try {
        const jsonStr = JSON.parse(jsonString);
        console.log(jsonStr);
    } catch (error) {
        console.error(`Failed to load json: ${error}`);
    }
}

parseJson({ name: "abc", age: 16 });
parseJson('{ "name": "jk", "age": 20 }');



/// Task 2: Custom Error Throwing
/// Create a function that validates user input and throws a custom error for invalid input.

function validateAge(age) {
    if (age < 1 || age > 100) {
        throw new Error("give Inavlid input.");
    } else {
        console.log(`age is: ${age}`);
    }
}1
validateAge(0);
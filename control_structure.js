/// 1. Conditional Statements

// If / Else If / Else

let score = 60;

if (score >= 70) {
    console.log("You are winning!");
} else if (score >= 50) {
    console.log("You are well playing!");
} else {
    console.log("You are a looser!");
}

// Switch Statement

let fruit = "orange";

switch (fruit) {
    case "apple":
        console.log("Apple colour is red.");
        break;
    case "banana":
        console.log("Banana colour is yellow.");
        break;
    case "orange":
        console.log("Orange colour is orange.");
        break;
    case "graps":
        console.log("Graps colour is green.");
        break;
    default:
        console.log("Invalid input.");
        break;
}



/// Task 1: Even or Odd Checker

let userValue = 7;

function checkValueIsOddYaEven(param) {
    if (param % 2 === 0) {
        console.log("Given value is even.");
    } else {
        console.log("Given value is odd.");
    }
}

checkValueIsOddYaEven(3);
checkValueIsOddYaEven(6);



/// Task 2: Day of the Week with Switch

switch (userValue) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input.");
        break;
}
/// ARITHMATIC OPERATOR

// Addition (+)

let add = 40 + 20;

console.log("addition : " + add);

// Subtraction (-)

let sub = 95 - 15;

console.log("subtraction : " + sub);

// Multiplication (*)

let mul = 10 * 10;

console.log("multiplication : " + mul);

// Division (/)

let div = 6 / 3;

console.log("division : " + div);

// Modulus (%)
// Returns the remainder of a division.

let mod = 20 / 2;

console.log("modulus : " + mod);

// Exponentiation (**)

let expon = 2 ** 3; // (2 * 2 *2)

console.log("exponentiation : " + expon);




/// ASSIGNMENT OPRATOR

// Simple Assignment (=)

let simpleAssign = "Assign value";

console.log(simpleAssign);

// Addition Assignment (+=)

let value = 5;

console.log(value += 10);

// Subtraction Assignment (-=)

console.log(value -= 2);

// Multiplication Assignment (*=)

console.log(value *= 2);

// Division Assignment (/=)

console.log(value /= 2);

// Modulus Assignment(%=)

console.log(value %= 5);




/// COMPARISON OPERATOR

// Equal (==)

console.log(10 == "10");

// Strict Equal (===)

console.log(10 === "10");

// Not Equal (!=)

console.log(10 != '10');

// Strict Not Equal(!==)

console.log(10 !== "10");

// Greater Than (>) and Less Than (<)

console.log(10 > 20);
console.log(10 < 10);

// Greater Than or Equal To (>=) and Less Than or Equal To (<=)

console.log(10 >= 20);
console.log(10 <= 10);





/// LOGICAL OPERATOR

// Logical AND (&&)

console.log(10 > 20 && 30 < 40);

// Logical OR (||)

console.log(10 > 20 || 30 < 40);

// Logical NOT (!)

console.log(!(10 > 20));




/// BITWISE OPERATOR

// AND (&)

console.log(5 & 3); // 1 (0101 & 0011 => 0001)

// OR (|)

console.log(5 | 3); // 7 (0101 | 0011 => 0111)

// XOR (^)

console.log(5 ^ 3); // 6 (0101 ^ 0011 => 0110)

// NOT (~)

console.log(~8);

// Left Shift (<<) and Right Shift (>>)

console.log(5 << 1); // 10 (shifts bits to left)
console.log(5 >> 1); // 2  (shifts bits to right)





/// TERNARY(CONDITIONAL) OPRATOR

// condition ? true statement : false statement

let age = 10
console.log((age > 18) ? "You are eligible for vote." : "You are not eligible for vote.");




/// Task 1: Calculator with Arithmetic and Assignment Operators
/// Perform addition, subtraction, multiplication, division, and modulus operations.

let val1 = 20;
let val2 = 2;

let addition = val1 + val2;
console.log(`addition : ${addition}`);

let subtraction = val1 - val2;
console.log(`subtraction : ${subtraction}`);

let multiplication = val1 * val2;
console.log(`multiplication : ${multiplication}`);

let division = val1 / val2;
console.log(`division : ${division}`);

let modulus = val1 % val2;
console.log(`modulus : ${modulus}`);




/// Task 2: Comparison and Logical Operations
/// Check if the number is between 10 and 20 (inclusive).

let val = 10;

if (val >= 10 && val <= 20) {
    console.log("enter value in the range");
} else {
    console.log("enter value out of the range");
}




/// Task 3: Ternary Operator Challenge
/// Write a function that takes a year as an argument.

function isYearIsLeapOrNot(params) {
    if (params % 4 === 0 && params % 100 !== 0 || params % 400 === 0) {
        return `${params} is leap year.`;
    } else {
        return `${params} is not a leap year.`;
    }
}

let year = 2005;
console.log(isYearIsLeapOrNot(year));




/// Task 4: Bitwise Operations Exploration
/// Performs bitwise AND, OR, and XOR on two numbers.


let a = 5;
let b = 3;

console.log(`A covert into binary ${a.toString(2)}`);
console.log(`B convert into binary ${b.toString(2)}`);

console.log(`A(${a.toString(2)}) & B(${b.toString(2)}) => ${a & b}(${(a & b).toString(2)})`);
console.log(`A(${a.toString(2)}) | B(${b.toString(2)}) => ${a | b}(${(a | b).toString(2)})`);
console.log(`A(${a.toString(2)}) ^ B(${b.toString(2)}) => ${a ^ b}(${(a ^ b).toString(2)})`);

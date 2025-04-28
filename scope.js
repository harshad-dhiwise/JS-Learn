/// Global Scope

let wish = "Happy Birthday";
let name = "Bhide";

function birthdayWishFun() {
    console.log(`${wish} ${name}`);
}

birthdayWishFun();



/// Function Scope

function localScope() {
    let age = 18;
    console.log(`my age is, ${age}`);
}

// console.log(age); // ReferenceError: age is not defined

localScope()



/// Block Scope

{
    let variable = "I am block scope.";
    console.log(variable);

}

console.log(variable); // ReferenceError: variable is not defined



/// Lexical Scope and Closures

function lexicalScope() {
    let lexicalVar = "I am lexical scope.";

    function innerFun() {
        console.log(lexicalVar);
    }

    return innerFun;
}

const closures = lexicalScope();
closures();



/// Task 1: Experimenting with Block Scope
/// Demonstrate the difference between var, let, and const in block scope.

{
    var valVar = "this is a var variable.";
    let valLet = "this is a let variable.";
    const valConst = "this is a const variable.";
    console.log(valConst);
    console.log(valLet);
}

console.log(valVar);



/// Task 2: Create and Use a Closure
/// Create a function that demonstrates closure by retaining access to a variable in an outer function even after the outer function has finished executing.

function checkFunScope(params) {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    }
}
 
const func = checkFunScope();
func();
func();
func();



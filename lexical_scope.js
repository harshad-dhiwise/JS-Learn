let globalVar = "I have global access.";

function outerFun() {
    let innerVar = "I have function outer variable.";

    function innerFun() {
        let insideVar = "I have function inner variable.";

        console.log(globalVar);
        console.log(innerVar);
        console.log(insideVar);
    }

    innerFun();
}

outerFun();



/// Task 1: Function Factory Using Lexical Scoping
/// Create a function factory that generates functions for arithmetic operations (e.g., adding a fixed number).

function Addition(params1) {
    return function (params2) {
        return params1 + params2;
    }
}

let add = Addition(5);
console.log(add(10));



/// Task 2: Exploring Variable Shadowing with Lexical Scoping
/// Understand how variable shadowing works with lexical scoping.

function varShadowing() {
    let val = "hello";
    console.log(val);
    

    function innerFun() {
        let val = "world";
        console.log(val);
    }

    innerFun();
    console.log(`variable shadowing, ${val}`);
}

varShadowing();
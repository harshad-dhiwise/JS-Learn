// 1. var
// Scope: Function - scoped.
// Hoisting: Variables declared with var are hoisted (declared at the top of their scope) which can lead to unexpected behavior.

var name = "manoj";

console.log(name);

// 2. let
// Scope: Block - scoped(i.e., limited to the block in which it is defined).
// Hoisting: Also hoisted, but not initialized until its definition is evaluated, which helps avoid some pitfalls of var.

let age = 20;

console.log(age);

// 3. const
// Scope: Block - scoped.
// Immutability of Binding: Once assigned, you cannot reassign a const variable.However, if it holds an object or array, the contents can still be modified.

const person = {
    "name": "vinas",
    "gender": "male",
}

console.log(person);

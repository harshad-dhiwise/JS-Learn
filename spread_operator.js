/// Merging Arrays:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// Copying Arrays:
const original = [2, 4, 6];
const copy = [...original];
console.log(original);



/// For Objects:

// Merging Objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

// Adding / Overriding Properties:
const user = {
    name: "dev",
    age: 30,
};

const profile = {
    ...user,
    userName: "dev@369",
    email: "dev.369@gmail.com"
};

console.log(profile);



/// Task 1: Merging Arrays with the Spread Operator
/// Merge two arrays containing names of fruits and vegetables into a single array.

const fruits = ["orange", "lichi", "pinepple"];
const vegetables = ["bringale", "potato", "onion"];

const food = [...fruits, ...vegetables];
console.log(food);



/// Task 2: Merging Objects with the Spread Operator
/// Create two objects representing personal details and contact details, then merge them.

const personalDatail = {
    name: "jig",
    surname: "shah",
}

const contactDetail = {
    phno: "2345799002",
    email: "abc@gmail.com",
}

const fullProfile = {...personalDatail, ...contactDetail};

console.log(fullProfile);


/// Array Destructuring

const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third);

const rgb = [255, 200];
const [red, green, blue = 100] = rgb;
console.log(red, green, blue);



/// Object Destructuring

const person = {
    name: 'Alice',
    age: 20,
    city: 'boston'
}

// const {age, name} = person;
// console.log(age, name);

const { name: personName, city = "boston" } = person;
console.log(personName, city);



/// Nested Destructuring:

const user = {
    id: 1,
    profile: {
        userName: "code@123",
        email: "code@gmail.com",
    }
}

const { profile: { userName, email } } = user;
console.log(userName, email);



/// Task 1: Array Destructuring Practice
/// Extract values from an array containing your favorite colors

const colors = ["green", "orange", "brown", "yellow", "black", "grey"];
const [primaryColor, secondaryColor, ...remainColors] = colors;
console.log(primaryColor);
console.log(secondaryColor);
console.log(remainColors);



/// Task 2: Object Destructuring Practice
/// Extract specific properties from an object representing a book.

const book = {
    title: "1984",
    author: "George",
    year: 2015,
};

const {title, author, rating = 4.5} = book;
console.log(title);
console.log(author);
console.log(rating);

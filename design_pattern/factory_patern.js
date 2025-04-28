function carFactory(name, company, year) {
    return {
        name,
        company,
        year,
        getCarInfo() {
            console.log(`model name is ${name}.\ncompany name is ${company}.\nmanufacturing year is ${year}.\n`);
        }
    };
}

const car1 = carFactory("seltos", "kia", 2022);
const car2 = carFactory("fortuner", "toyota", 2023);

car1.getCarInfo();
car2.getCarInfo();



/// Task 1: Build a Factory Function
/// Write a factory function to create user objects.

function User(name, email, role) {
    return {
        name,
        email,
        role,
        displayInfo() {
            console.log(`name: ${name}\nemail: ${email}\nrole: ${role}`);
        }
    }
}

const user = User("john", "john123@yahoo.com", "UI/UX designer");
user.displayInfo();
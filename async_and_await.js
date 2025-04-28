// import fd from './promises.js'

// // function fetchData() {
// //     return new Promise((resolve, reject) => {
// //         const data = {
// //             id: 5,
// //             name: "tej",
// //             age: 19,
// //         };
// //         resolve(data);
// //     }, 2000);
// // }

// async function getData() {
//     try {
//         const data = await fd();
//         console.log(data);
//     } catch (error) {
//         console.error(`Failed to load data: ${error}`);
//     } finally {
//         console.log('Operation executed successfully!');
//     }
// }

// getData();



// /// Task 1: Async / Await Implementation
// /// Use async/await to handle the Promise returned from getUserDataPromise.

// function getUserDataPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const animalData = {
//                 name: "Lion",
//                 food: "non-vegetarian",
//             }
//             resolve(animalData);
//             reject("Failed to load data.");
//         }, 1500);
//     })
// }

// async function displayUserData() {
//     try {
//         const data = await getUserDataPromise();
//         console.table(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// displayUserData();



/// Task 2: Chaining Promises
/// Create a series of asynchronous functions that depend on each other using Promise chaining.

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 3, name: "rana" });
        }, 1000);
    });
}

function fetchUserPosts(userID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { postId: 1, content: `Post 1 for user ${userID}` },
                { postId: 2, content: `Post 2 for user ${userID}` },
            ])
        }, 1500);
    });
}

fetchUser().then(user => {
    console.log(user);
    return fetchUserPosts(user.id);
}).then(posts => { console.log(posts); }
).catch(err => console.error(err)
);

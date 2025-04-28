// Add at the beginning of your code
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// /// Using XMLHttpRequest(XHR)

// const xmlHttpRequest = new XMLHttpRequest();

// xmlHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// xmlHttpRequest.onreadystatechange = function () {
//     if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.readyState == 200) {
//         const data = JSON.parse(xmlHttpRequest.responseText);
//         console.log(data);
//     }
// }

// xmlHttpRequest.send();



/// Fetch API

fetch("https://fakestoreapi.com/products/1").then(resp => {
    if (!resp.ok) {
        throw new Error("Something went wrong");
    }
    return resp.json();
}).then(jsonData => console.log(`data is:\n`, jsonData)
).catch(err => console.error("Failed to load data.", err)
);



/// Async/Await with Fetch

async function getApiData() {
    try {
        const resp = await fetch("https://fakestoreapi.com/products/1");

        if (!resp.ok) {
            throw new Error("Something went wrong.");
        }

        const jsonData = await resp.json();
        console.log(jsonData);
    } catch (error) {
        console.error(`Failed to load data ${error}`);
    }
}

getApiData();



/// Task 1: Convert XMLHttpRequest to Fetch
/// Rewrite an existing XMLHttpRequest - based AJAX call using the Fetch API.

fetch("https://jsonplaceholder.typicode.com/posts").then(resp => console.log(resp.json())
).catch(err => console.error("Failed to load data: ", err)
);



/// Task 2: Async / Await Challenge
/// Create an async function that makes two consecutive API requests using Fetch, where the second request depends on data from the first.

async function fetchUserData() {
    try {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!posts.ok) throw new Error("Failed posts api.");
        const post = await posts.json();
        console.log(`posts api data: ${post}`);

        const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        if (!userData.ok) throw new Error("Failed user api.");
        const user = await userData.json()
        console.log(`user api data: ${user}`);

    } catch (error) {
        console.error("something went worng.", error);
    }
}

fetchUserData();
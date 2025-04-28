const fetchData = () => {
    return new Promise((resolve, reject) => {
        const data = {
            id: 1,
            name: "raj",
        }
        // Resolve the promise with data or reject with an error.
        resolve(data);
        // reject(new Error("Failed to fetch data")); // In case of an error
    }, 2000);
};

fetchData().then(data => {
    console.log(data);
}).catch(err => console.error(`Something went wrong: ${err}`)
).finally(() => console.log("Execution complete.")
);

export { fetchData };



/// Task 1: Convert a Callback - based Function to a Promise
/// Convert the getUserData function from Task 1 to return a Promise instead of using callbacks.

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                id: 145,
                name: "raju",
            }
            resolve(data);
            reject("Failed to fetch data.");
        }, 1500);
    });
}

getUserData().then(data => console.log(data)
).catch(err => console.error(err)
).finally(console.log('End!')
);
function fetchData(callBack) {
    setTimeout(() => {
        const data = { id: 1, name: "Alice" }
        callBack(null, data); // null for error
    }, 5000); // wait for 5 seconds
}

fetchData((error, data) => {
    if (error) {
        console.error("Something went wrong: ", error);
    } else {
        console.log("Data retrieve successfully! \n", data);
    }
});



/// Task 1: Callback to Simulate an Asynchronous Operation
/// Create a function that simulates fetching user data after a delay using callbacks.

function getUesrData(callBack) {
    setTimeout(() => {
        const data = {
            id: 123,
            name: "Baburav Aapte"
        };
        callBack(null, data);
    }, 1500);
}

getUesrData((err, data) => {
    if (err) {
        console.error("Something went wrong", err);
    } else {
        console.log("Fetch data successfully!, ", data);
    }
});
// import greet, { add, mul } from './exporting_file1.js';

// console.log(add(2, 4));

// console.log(mul(5, 5));

// greet("yug");

import("./exporting_file1.js").then(modules => {
    console.log(modules.add(2, 4));
}).catch(err => console.error(`Failed to load module: ${err}`)
);
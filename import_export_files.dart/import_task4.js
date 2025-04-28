import("./export_task1.js").then(module => console.log(module.subtract(3, 3))
).catch(err => console.error(`Failed to load module: ${err}`)
);
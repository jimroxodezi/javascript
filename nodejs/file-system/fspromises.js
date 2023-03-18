const fs = require("fs/promises");

console.log("First");

fs.readFile("./text.txt", "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
// cpmes before file read
console.log("Second");

// cleaner use of promises (async/await)
(async() => {
    try {
        const data = await fs.readFile("./text.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();

// comes before file read
console.log("Third");
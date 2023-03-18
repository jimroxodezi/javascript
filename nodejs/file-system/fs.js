const fs = require("node:fs");

console.log("first");

// sychronous API
const data = fs.readFileSync("./text.txt", "utf-8");
if (!data) {
    throw Error("could't read file");
}else {
    console.log(data);
}

console.log("second");

// Asynchronous API
fs.readFile("./text.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("there was a problem reading the file");
    } else {
        console.log(data);
    }
});

// come before asychronous readFile.
console.log("third");
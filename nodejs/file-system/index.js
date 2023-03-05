const fsp = require('fs/promises');

(async () => {
    try {
        await fsp.copyFile("./text.txt", "copied-promise.txt");
    } catch (error) {
        console.log(error);
    }
})();


const fs = require("fs");

fs.copyFile("./text.txt", "copied-callback.txt", (err) => {
    if (err) console.log(err);
});


fs.copyFileSync("./text.txt", "copied-sync.txt")
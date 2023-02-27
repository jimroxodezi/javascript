const https = require("node:https")


const start = Date.now();

const MAX_CALLS = 4;

for (let i = 0; i < MAX_CALLS; i++) {
    https
        .request("hhtps://google.com", (res) => {
            res.on("data", () => {});
            res.on("end", () => {
                console.log(`Request: ${i + 1} --> ${Date.now()}`);
            });
        })
        .end(() => {
            console.log("request ended");
        });
}
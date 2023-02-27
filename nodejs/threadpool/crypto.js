// node uses the thread pool for asynchronous crypto
// computations.

const crypto = require("node:crypto");
const os = require("node:os");

process.env.UV_THREADPOOL_SIZE = 8;// os.cpus.length;
const MAX_CALLS = 8;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100_000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1} --> ${Date.now() - start}`);
    });
}

console.log(os.cpus().length);
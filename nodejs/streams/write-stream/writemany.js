

// const fsp = require("fs/promises");

// (async() => {
//     console.time("writemany");
//     const fileHandler = await fsp.open("./test.txt", "w");
//     const NUM_ITERATIONS = 1_000_000;

//     for (let i = 0; i < NUM_ITERATIONS; i++) {
//         await fileHandler.write(` ${i} `);
//     }
//     console.timeEnd("writemany");

// })();


// const fs = require("fs");
// const NUM_ITERATIONS = 1_000_000;

// console.time("writeMany");
// fs.open("./test.txt", "w", (err, fd) => {
//     if (err) console.log(err);
//     for (let i = 0; i < NUM_ITERATIONS; i++) {
//         const buff  = Buffer.from(` ${i} `, "utf-8");
//         fs.writeSync(fd, buff);
//     }
//     console.timeEnd("writeMany");
// });

// // using stream
// // BAD PRACTICE!!
// const fsp = require("fs/promises");

// (async() => {
//     console.time("writemany");
//     const fileHandler = await fsp.open("./test.txt", "w");

//     // create write stream from file descriptor
//     const stream = fileHandler.createWriteStream();

//     const NUM_ITERATIONS = 1_000_000;

//     for (let i = 0; i < NUM_ITERATIONS; i++) {
//         const buff = Buffer.from(` ${i} `, "utf-8");
//         stream.write(buff);
//     }
//     console.timeEnd("writemany");

// })();


// LET'S FIX OUR CODE.
const fsp = require("fs/promises");

(async() => {
    console.time("writer");
    const fileHandler = await fsp.open("./test.txt", "w");

    // create write stream from file descriptor
    const stream = fileHandler.createWriteStream()


    let i = 0;
    const writeToFile = () => {
        while (i < 1_000_000) {
            const buff = Buffer.from(` ${i} `, "utf-8");

            // if stream.write() returns false, break out of loop
            if (!stream.write(buff)) break;

            if (i === 999_999) return stream.end(buff);
            i++;
        }
    };
    writeToFile();

    // resume loop after stream buffer is drained.
    stream.on("drain", () => {
        writeToFile();
    });

    stream.on("finish", () => {
        fileHandler?.close()
        console.timeEnd("writer");
    });

})();
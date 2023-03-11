
const fs = require('fs/promises');
const { pipeline } = require('stream');

// // large memory usage
// // memory usage equal to file size.
// (async() => {
//     const dest = await fs.open("copy-text.txt", "w");
//     const data = await fs.readFile("src.txt");

//     dest.write(data);
// })


// // lesser memory usage
// // more compute time
// (async() => {
//     const dest = await fs.open("copy-text.txt", "w");
//     const src = await fs.open("src.txt", "r");

//     let bytesRead = -1

//     while (bytesRead !== 0) {
//         const readBytes = await src.read()
//         bytesRead = readBytes.bytesRead

//         // remove null bytes.
//         if (bytesRead !== 16384) {
//             const indexOfNofFilled = readBytes.buffer.indexOf(0);
//             const newBuffer = Buffer.alloc(indexOfNofFilled);
//             readBytes.buffer.copy(newBuffer, 0, 0, indexOfNofFilled);
//             dest.write(newBuffer);

//         } else {
//             await dest.write(readBytes.buffer);
//         }

//     }
// })();

(async() => {
    console.time("piping");
    const dest = await fs.open("copy-text.txt", "w");
    const src = await fs.open("src.txt", "r");

    const readStream = src.createReadStream();
    const writeStream = dest.createWriteStream();

    // // use pipeline for error handling
    // readStream.pipe(writeStream);
    // readStream.on("end", () => {
    //     console.timeEnd("piping");
    // })

    pipeline(readStream, writeStream, (err) => {
        if (err) console.error();
        console.timeEnd("piping");
    });

})();
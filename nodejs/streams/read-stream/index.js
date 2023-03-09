const { write } = require('fs');
const fs = require('fs/promises');

(async() => {
    const readFileHandler = await fs.open("./src.txt", "r");
    const writeFilehandler = await fs.open("./dest.txt", "w");

    const readStream = readFileHandler.createReadStream({
        highWaterMark: 64 * 1024
    });

    const writeStream = writeFilehandler.createWriteStream();

    readStream.on("data", (chunk) => {
        if (!writeStream.write(chunk)) {
            readStream.pause();
        }
    })

    writeStream.on("drain", () => {
        readStream.resume();
    })
})();
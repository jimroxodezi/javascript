

const fs = require("fs/promises");

(async() => {

    const fileHandler = await fs.open("./file.txt", "r");

    fileHandler.on("change", async() => {
        const fileHandlerSize = (await fileHandler.stat()).size;
        const BUFFER = Buffer.alloc(fileHandlerSize);
        const OFFSET = 0;
        const LENGTH = BUFFER.byteLength;
        const POSITION = 0;

        const content = await fileHandler.read(
            BUFFER, 
            OFFSET,
            LENGTH,
            POSITION
        );

        console.log(content);
    });
    
    const watcher = fs.watch("./file.txt");

    for await (const event of watcher) {
        if (event.eventType === "change") {
            fileHandler.emit("change");
        }

    }
})();


const fs = require("fs/promises");
// const path = require("path");

(async() => {

    const CREATE_FILE_COMAND = "create a file";
    const DELETE_FILE_COMMAND = "delete the file";
    const RENAME_FILE_COMMAND = "rename the file";
    const ADD_TO_FILE_COMMAND = "add to the file"

    // file operations...
    // create a file operation
    const createFile = async (filePath) => {
        
        try {
            const existingFileHandle = await fs.open(filePath, "w");
            existingFileHandle?.close();
        } catch (error) {
            const newFileHandler = await fs.open(filePath, "r");
            newFileHandler?.close();
        }
    };

    // delete file operation
    const deleteFile = (filePath) =>{
        console.log(`deleting file: ${filePath}`);
    };

    // rename file operation
    const renameFile = (oldPath, newPath) => {
        console.log(`renaming ${oldPath} to ${newPath}`);
    };

    // add to file operation
    const addToFile = (filePath, content) => {
        console.log(`adding ${content} to ${filePath}`);
    }

    // the file we are watching
    const fileHandler = await fs.open("./file.txt", "r");

    fileHandler.on("change", async() => {
        const fileHandlerSize = (await fileHandler.stat()).size;
        // buffer to read into
        const BUFFER = Buffer.alloc(fileHandlerSize);
        // position of start of buffer
        const OFFSET = 0;
        // number of bytes to read
        const LENGTH = BUFFER.byteLength;
        // position of file to start reading from
        const POSITION = 0;

        await fileHandler.read(BUFFER, OFFSET, LENGTH, POSITION);

        const command = BUFFER.toString("utf-8");


        // operations that can hange the file
        // create a file <filePath>
        if (command.includes(CREATE_FILE_COMAND)) {
            const filePath = command.substring(CREATE_FILE_COMAND.length + 1);
            createFile(filePath);
        };

        // delete the file <filePath>
        if (command.includes(DELETE_FILE_COMMAND)) {
            const filePath = command.substring(DELETE_FILE_COMMAND.length + 1);
            deleteFile(filePath);
        };

        // rename the file <oldPath> to <newPath>
        if (command.includes(RENAME_FILE_COMMAND)) {
            const newPath = command.substring(RENAME_FILE_COMMAND.length + 1);
            const oldPath = command.substring(RENAME_FILE_COMMAND.length + 1 + newPath);
            renameFile(oldPath, newPath);
        };

        if (command.includes(ADD_TO_FILE_COMMAND)) {
            const TO = command.indexOf("to");
            const filePath = command.substring(ADD_TO_FILE_COMMAND.length + 1, TO);
        }
    });
    
    const watcher = fs.watch("./file.txt");

    for await (const event of watcher) {
        if (event.eventType === "change") {
            fileHandler.emit("change");
        }

    }
})();
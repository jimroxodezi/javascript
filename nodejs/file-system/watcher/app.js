

const fs = require("fs/promises");


(async() => {
    // expected commands typed on watched file
    const CREATE_FILE_COMMAND = "create a file";
    const DELETE_FILE_COMMAND = "delete the file";
    const RENAME_FILE_COMMAND = "rename the file";
    const ADD_TO_FILE_COMMAND = "add to the file"

    // file operations...
    // create a file operation
    const createFile = async (filePath) => {
        
        try {
            const existingFileHandle = await fs.open(filePath, "r");
            if (existingFileHandle) {
                console.log(`File ${filePath} already exists.`);
            }
            existingFileHandle.close();
        } catch (e) {
            const newFileHandler = await fs.open(filePath, "w");
            console.log(`File ${filePath} successfully created.`);
            newFileHandler.close();
        }
    };

    // delete file operation
    const deleteFile = async(filePath) => { 
        await fs.unlink(filePath).then(() => {
            console.log(`deleting file: ${filePath}........`);
        }).catch((e) => {
            if (e.errno === -2) {
                console.log("No file to remove.");
            }
        });
    };

    // rename file operation
    const renameFile = async(oldPath, newPath) => {
        await fs.rename(oldPath, newPath).then(() => {
            console.log(`renamed ${oldPath} to ${newPath}`);
        }).catch((e) => {
            if (e.code === 'ENOENT') {
                console.log("No file to rename; Please specify a file");
            }else {
                console.log(`couldn't rename file: ${e}`);
            }
        });
    };

    // add to file operation
    const addToFile = async(filePath, content) => {
        await fs.open(filePath, "a").then((fd) => {
            fd.write(content);
            console.log(`adding ${content} to ${filePath}`);
        }).catch((e) => {
            if (e.code === 'ENOENT') {
                console.log("File does not exist");
            }else {
                console.log(`couldn't append to file: ${e}`);
            }
        })
    };
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

        // read file changes content into BUFFER
        await fileHandler.read(BUFFER, OFFSET, LENGTH, POSITION);

        // work with text commands in the buffer. Commands
        // is expected to be typed into watched file
        const command = BUFFER.toString("utf-8");

        // operations that can change the file
        // create a file <filePath>
        if (command.includes(CREATE_FILE_COMMAND)) {
            const filePath = command.substring(CREATE_FILE_COMMAND.length + 1);
            createFile(filePath);
        };

        // delete the file <filePath>
        if (command.includes(DELETE_FILE_COMMAND)) {
            const filePath = command.substring(DELETE_FILE_COMMAND.length + 1);
            deleteFile(filePath);
        };

        // rename the file <filePath> to <newPath>
        if (command.includes(RENAME_FILE_COMMAND)) {
            const TO = command.indexOf(" to ");
            const filePath = command.substring(RENAME_FILE_COMMAND.length + 1, TO);
            const newPath = command.substring(TO + 4);
            renameFile(filePath, newPath);
        };

        // add to file <filePath> this content: <content>
        if (command.includes(ADD_TO_FILE_COMMAND)) {
            const THIS_CONTENT = command.indexOf(" this content: ");
            const filePath = command.substring(ADD_TO_FILE_COMMAND.length + 1, THIS_CONTENT);
            const content = command.substring(THIS_CONTENT + 15);
            addToFile(filePath, content);
        }
    });
    
    const watcher = fs.watch("./file.txt");

    for await (const event of watcher) {
        if (event.eventType === "change") {
            fileHandler.emit("change");
        }

    }
})();
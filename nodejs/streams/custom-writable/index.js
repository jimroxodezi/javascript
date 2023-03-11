const { Writable, Stream } = require("node:stream");


class FileWriteStream extends Writable {
    constructor({highWaterMark, fileName}) {
        super({highWaterMark})
        this.fileName = fileName
    }

    _write(chunk, encoding, callback) {

    }
}


const fileStream = new FileWriteStream({highWaterMark: 1800});
fileStream.write(Buffer.from("this is some string"));
fileStream.write(Buffer.from("this is some more string"));
fileStream.end();
const EventEmitter = require("node:events")

class Emitter extends EventEmitter {}

const emitter = new Emitter();

emitter.on("foo", () => {
    console.log("an event occured");
});

emitter.emit("foo")
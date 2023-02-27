const EventEmitter = require("node:events")

class Emitter extends EventEmitter {}

const emitter = new Emitter();
// a listener is a callback function that is executed when 
// the corresponding event is emitted.


// emitter.on("foo", () => {
//     console.log("an event occured");
// });

emitter.on("order-pizza", (size, topping) => {
    console.log(`Here's your ${size} pizza with ${topping} topping`);
});

emitter.on("order-pizza", (size) => {
    if (size === "large") {
        console.log("Serving complementary drink!");
    }
})

// to demonstrate asynchrony
console.log("Prepare before serving");

emitter.emit("foo");
emitter.emit("order-pizza", "large", "mushroom");
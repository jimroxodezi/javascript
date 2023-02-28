

// TODO: Learn JavaScript Array methods!

const { time, timeEnd } = require("console");

time("loop");

let i = 0;
while (i < 10_000_000_000) {i++}
console.log(i);

timeEnd("loop");
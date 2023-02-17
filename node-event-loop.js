/*
    sample code to show the operation of the nodejs event loop going
    through different execution phases.
    we use process.stdout.write since console.log can be asychronous.
*/

const process = require('process');
const fs = require('fs');
const http = require('http')


function fib(n) {
    return n < 1 ? n : fib(n-1) + fib(n-2);
}


// const STDOUT = process.stdout;
process.stdout.write("\n\n------------------START--------------------\n\n");

// NEXTTICK()
process.nextTick(() => {
    process.stdout.write("NT1: " + "nextick()\n");
});

// 1. IO polling
fs.readFile("./data.txt", (err, data) => {
    process.stdout.write("1: THREADPOOL POLLING\n");
});

// 2. IO polling
// http.request.get("https://google.com", (err, res, body) => {
//     process.stdout.write("2: " + "System polling\n");
// });

// IO Polling
data = fetch("https://google.com", {method: 'GET'});
process.stdout.write("2: System Polling" + data + "\n");

// 3. setImmediate
setImmediate(() => {
    process.stdout.write("3: " + "SETIMMEDIATE\n");
});

// 4. //setTimeout
setTimeout(() => {
    process.stdout.write("4: " + "TIMERS\n");
}, 0);

// 5. async callback/userspace computation
process.stdout.write("5: fib(20) " + fib(40) + " Async Callback in userspace\n");

// nextTick
process.nextTick(() => {
    process.stdout.write("NT2: " + "nextTick()\n");
});
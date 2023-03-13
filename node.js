const { pipeline } = require('stream');


// setInterval(() => {
//     console.log("hello");
// }, 1000);

// the on method adds an event listener to 
// the named event
// process.on("SIGINT", () => {
//     console.log("I'm leaving");
//     process.exit(0);
// });

// process.addListener("SIGINT", ()=>{
//     // this is an alias for process.on()
// })

// events happens outside the process, but are modelled
// by different objects that detects them (emits, in JavaScript speak)
// and callback functions (event listeners) are executed
// when these events are emitted.
// `const exec = require('child_process').exec;
// exec("pwd", (err, output) => {
//     if (err) console.error;
//     console.log(output);
// });


const spawn = require('child_process').spawn;

const cat = spawn('cat');

cat.stdin.write("Hello ");

setTimeout(() => {
    cat.stdin.end("World\n");
}, 2000);

// cat.stdout.on('data', (data) => {
//     console.log(data.toString('utf-8'));
// });

// same as above but better.
pipeline(cat.stdout, process.stdout, (err) => {
    if (err) { throw new Error("couldn't pipe...");}
});
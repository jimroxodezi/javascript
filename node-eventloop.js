setTimeout(() => {
    console.log("this is setTimeout 1");
}, 0);
setTimeout(() => {
    console.log("this is setTimeout 2");
}, 0);
setTimeout(() => {
    console.log("this is setTimeout 3");
}, 0);

process.nextTick(() => {
    console.log("this is process.nextTick 1");
});
process.nextTick(() => {
    console.log("this is process.nextTick 2");
    process.nextTick(() => {
        console.log("inner nested process.nextTick ");
    });
});
process.nextTick(() => {
    console.log("this is process.nextTick 3");
});

Promise.resolve().then(() => {
    console.log("Promise.resolve 1");
});
Promise.resolve().then(() => {
    console.log("Promise.resolve 2");
    Promise.resolve().then(() => {
        console.log("Inner Promise.resolve")
    })
});
Promise.resolve().then(() => {
    console.log("Promise.resolve 3");
});
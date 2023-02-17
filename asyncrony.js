


// setTimeout(() => {
//     console.log("5 seconds in the future");
//     setTimeout(() => {
//         console.log("10 seconds in the future");
//         setTimeout(() => {
//             console.log("15 seconds in the future");
//             setTimeout(() => {
//                 console.log("20 secnds in the future");
//             }, 5000);
//         }, 5000);
//     }, 5000);
// }, 5000);


/*
    A promise is a wrapper for a value that is unknown right
    now but will resolve to a value in the future.
*/
const promise = new Promise(
    (resolve, reject) => {
        // do some computation
    }
);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (getRandomBool()){
            resolve("resolved");
        } else {
            reject("rejected!");
        }
    }, 1000);
});

function getRandomBool() {
    return Math.random() < 5;
}

myPromise.then((message) => {
    console.log(`the promise returned ${message}`);
}).catch((message) => {
    console.log(`the promise returned ${message}`);
});
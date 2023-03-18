


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
// const promise = new Promise(
//     (resolve, reject) => {
//         // do some computation
//     }
// );

const myPromise = new Promise((resolve, reject) => {
    let time = Math.floor(10000 * Math.random() + 1); //'any random number between 1000-9000?
    console.log(time);
    setTimeout(() => {
        if (time < 6000){
            resolve("came in on time");
        } else {
            reject("oops! came in too late");
        }
    }, time);
});

console.log(myPromise); // Promise {<pending>}

myPromise
    .then((message) => {
        console.log(myPromise);
        console.log(`the promise returned ${message}`);
    })
    .catch((errMessage) => {
        console.log(myPromise);
        console.log(`the promise returned ${errMessage}`);
    });


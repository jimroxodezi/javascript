

const sayHello = () => {
    console.log("Hello");
};

const setTimeoutPromise = (timeOut) => {
    return new Promise((resolve, reject) => {
        if (isNaN(timeOut)) {
            reject(new Error("Timeout is not a number"))
        }
        setTimeout(resolve, timeOut);
    });
}

// setTimeout(sayHello, 5000);
setTimeoutPromise("fggjfgu").then(() => sayHello()).catch(err => console.error(err));
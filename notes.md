# Node Event Loop
It as a C program and is part of libuv. It is a design pattern that ochestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js.

## Q & A
1. Whenever an async task completes in libuv, at what point does Nodejs decide to run the associated callback function on the call stack? Callback functions are executed only when the callstack is empty. The normal flow of execution will not be interrupted to run a callback function.

2. What about async methods like setTimeout and setInterval which also delay the execution of a callback function? setTimeout and setInterval callbacks are given priority first.

3. If two async tasks such as setTimeout and readFile complete at the same time, how does Node decide which callback function to run first on the call stack? Timer callbacks are executed before I/O callbacks even if both are ready at the exact same time.

## Execution Order.
User written sychronous JavaScript code takes priority over async code that the runtime would like to execute. The other of execution for the different phases is as follows:

1. Any callbacks in the micro task queues are executed. First, tasks in the ```nextTick()``` queue and only then tasks in the promise queue.
2. All callbacks within the timer queue are executed.
3. Any callbacks in the micro task queues if present are executed. Again, first tasks in the ```nextTick()``` queue and only then tasks in the promise queue.
4. All callbacks within the I/O queue are executed.
5. Any callbacks in the micro task queues if present are executed. Again, first tasks in the ```nextTick()``` queue and only then tasks in the promise queue.
6. All callbacks in the check queue (```setImmediate```) are executed.
7. Any callbacks in the micro task queues if present are executed. Again, first tasks in the ```nextTick()``` queue and only then tasks in the promise queue.
8. All callbacks in the close queue are executed.
9. Any callbacks in the micro task queues if present are executed. Again, first tasks in the ```nextTick()``` queue and only then tasks in the promise queue.

If there are more callbacks to be processed, the event loop is kept alive for one more run and the same steps are repeated. On the otherhand, if all callbacks are executed and there is no more code to process, the event loop exits.


## Phases.

### Microtask Queues.

1. nextTick queue.
 ```js
 process.nextTick(() => {
    console.log("this is process.nextTick()");
 });
 ```

2. Promise queue. Any API or function that returns a promise.

```js
Promise.resolve().then(() => {
    console.log("this is a promise");
});
```



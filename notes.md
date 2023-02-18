# Node Event Loop
It as a C program and is part of libuv. It is a design pattern that ochestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js.

## Q & A
1. WHenever an async task completes in libuv, at what point does Nodejs decide to run the associated callback function on the call stack?

2. What about async methods like setTimeout and setInterval which also delay the execution of a callback function?

3. If two async tasks such as setTimeout and readFile complete at the same time, how does Node decide which callback function to run first on the call stack?

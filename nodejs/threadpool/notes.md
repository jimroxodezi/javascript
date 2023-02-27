## Notes

In Node.js, async methods are handled by libuv. They are handled in two different ways:

1. Native async mechanism
2. Thread pool.

Whenever possible, Libuv will use the native async mechanism in the OS so as to avoid blocking the main thread. SInce this is part of the kernel, there is different mechanism for each OS. We have epoll for Linux, Kqueue for MacOS and IO Completion Port on Windows. Relying on native async mechanism makes Node scalable as the only the only limitation is the operating system kernel. Example of this type is a network I/O operation. `https.request` is a network I/O operation and does not use the thread pool. Libuv delegates the work to the operating system kernel and whenever possible, polls the kernel and see if the request has completed.

If there is no native async support and the task is file I/O or CPU intensive, Libuv will use the thread pool to avoid blocking the main thread. Although the thread pool preserves asynchronicity with respect to Node's main thread, it can still become a bottleneck if all the reads are busy.
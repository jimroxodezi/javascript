// the cluster module enables the creation of child processes
// (also known as workers) that run simultaneously.
// all created workers share the same server port


const http = require("http");
const cluster = require("cluster");
const os = require("os");

console.log(os.cpus().length);

if (cluster.isMaster) {
    console.log(`Master process with pid: ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker process with pid: ${process.pid} is running`);

    const ITERATIONS = 10_000_000_000;
    const PORT = 3000;

    const server = http.createServer((req, res) => {
    if (req.url === "/") {

        console.log(`home page end-point hit on process: ${process.pid}`);
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("This is the home page");

    } else if (req.url === "/about") {

        console.log(`about end-point hit on process: ${process.pid}`);
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("This is the about page");

    }else if (req.url === "/slow-page") {

        console.log(`slow-page end-point hit on process: ${process.pid}`);
        // computation to simulate intense CPU use
        for (let i = 0; i < ITERATIONS; i++) {}
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Very slow page");

    } else {

        res.writeHead(400);
        res.end("Page Not Found!");
    }
    }).listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)});
}


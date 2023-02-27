const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("This is the home page");
    } else if (req.url === "/about") {
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("This is the about page");
    } else {
        res.writeHead(400);
        res.end("Page Not Found!");
    }
});

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
});
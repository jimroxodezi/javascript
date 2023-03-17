const net = require('node:net');

const PORT = 3000;
const HOST = "localhost"
const server = net.createServer();

// server.addListener is an alias for server.on 
server.addListener('connection', (conn) => {
    console.log("someone connected");
    conn.write("Hello, there!");
    conn.on('data', (data) => {
        // data
    })
});

server.on('close', () => {
    console.log("Someone disconnected");
});

server.on("listening", () => {
    console.log(`Server listening  on  ${server.address().address}:${PORT}`);
});

// server.listen() will trigger 'listening' event
server.listen(PORT, HOST);
console.log(server.address());

// A TCP server using the net module

const net = require('node:net');

const PORT = 3000;
const HOST = "localhost"
const server = net.createServer();

// server.addListener is an alias for server.on 
server.addListener('connection', (conn) => {
    conn.setEncoding('utf-8');
    const address = `${conn.remoteAddress}:${conn.remotePort}`;
    console.log(`New connection from ${address}`);
    conn.on('data', (data) => {
        console.log(`Connection data from ${conn.remoteAddress}:${conn.remotePort} => ${data}`);
        conn.write(data.toUpperCase());
    });

    conn.on('close', (err) => {
        if (err) {
            conn.emit('error');
        }
        console.log(`Connection from ${conn.remoteAddress}:${conn.remotePort} closed`);
    })

    // all errors close the connection. That is, a close event is 
    // emitted after every error.
    conn.on('error', (err) => {
        console.log('Connection %s error: %s', conn.remoteAddress, err.message);
    });
});

server.on('close', () => {
    console.log("Someone disconnected");
});

server.on("listening", () => {
    console.log(`Server listening  on  ${server.address().address}:${PORT}`);
});

// server.listen() will trigger 'listening' event
server
    .listen(PORT, HOST)
    .on('error', (e) => {
        if (e.code === 'EADDRINUSE') {
          console.log('Address in use, retrying...');
          setTimeout(() => {
            server.close();
            server.listen(PORT, HOST);
          }, 2000);
        }
});;
// console.log(server.address());
const { URL } = require("url");



const urlObject = new URL("https://example.com/example-path");

console.log(urlObject.hostname);
console.log(urlObject.pathname);
console.log(urlObject.hash);
console.log(urlObject.protocol);
console.log(urlObject.port);
console.log(urlObject.toJSON());
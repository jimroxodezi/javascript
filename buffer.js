// a buffer is just a container for temporarily holding
// a sequence of byte.
const BUFFER_SIZE = 8;


const buff = Buffer.alloc(BUFFER_SIZE);
buff.write("string", "utf-8");

console.log(buff);
console.log(buff.toString());
console.log(buff.toJSON());

const buff2 = Buffer.from("string", "utf-8");

console.log(buff2);

const buff3 = Buffer.from([0x73, 0x74, 0x72, 0x69, 0x6e, 0x67], "hex");
const buff4 = Buffer.from([115, 116, 114, 105, 110, 103], "hex");

console.log(buff3.toString());
console.log(buff4.toString());

// more to learn by practice.
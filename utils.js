

// // several data structures make it easy for us to work with
// // binary data in JavaScript. These include ArrayBuffers,
// // Uint8Array, Buffer, DataView, Blob and File


// // ArrayBuffer is a memory are. It doesn't know what's stored in it.
// let buffer = new ArrayBuffer(16);

// // console.log(buffer.byteLength);
// // console.log(buffer.slice(0,10));
// // console.log(buffer);

// let view8 = new Uint8Array(buffer);
// let view16 = new Uint16Array(buffer);
// let view32 = new Uint32Array(buffer);

// // console.log(view8);
// // console.log(`length of view8 is ${view8.length}`);
// // console.log(`bytes per element of view8 is ${view8.BYTES_PER_ELEMENT}`);
// // console.log(view16);
// // console.log(view32);

// // writing to the memory region (ArrayBuffer) using view
// for (let i = 0; i < view8.length; i++) {
//     view8[i] = i;
// }
// console.log(view8);
// console.log(buffer);

// for (let i = 0; i < view16.length; i++) {
//     view16[i] = i;
// }
// console.log(view16);
// console.log(buffer);

// for (let i = 0; i < view32.length; i++) {
//     view32[i] = i;
// }
// console.log(view32);
// console.log(buffer);

// let arr16 = new Uint16Array([1, 1000]);
// let arr8 = new Uint8Array(arr16);

// console.log(arr8);
// console.log(arr16);

// // DataView is a super flexible UntypedArray
// let buffer = new Uint8Array([255,255,255,255]).buffer;

// let dataView = new DataView(buffer);

// console.log(dataView.getUint8(0));
// console.log(dataView.getUint8(1));
// console.log(dataView.getUint16(0));
// console.log(dataView.getUint16(1));
// console.log(dataView.getUint32(0));
// // console.log(dataView.getUint32(1)); // rangeError: out of bounds

// =========text decoding======================
// let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
// const textDecoder = new TextDecoder("utf-8");
// console.log(textDecoder.decode(uint8Array));

// let uint8Array2 = new Uint8Array([228, 189, 160, 229, 165, 189]);
// console.log(textDecoder.decode(uint8Array2));

// let uint8Array3 = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);
// console.log(textDecoder.decode(uint8Array3));

// let subString = uint8Array3.subarray(2,-2);
// console.log(textDecoder.decode(subString));


// ============text encoding===============
// let encoder = new TextEncoder();
// uint8Array = encoder.encode("hello");
// // console.log(uint8Array);

// let uint8Array2 = new Uint8Array(20);
// const {written, read} = encoder.encodeInto("Jimrox Odezi Ogume", uint8Array2);
// console.log(written);
// console.log(read);

// console.log(uint8Array2);


// let textDecoder = new TextDecoder()
// console.log(textDecoder.decode(uint8Array2));
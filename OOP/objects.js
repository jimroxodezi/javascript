
// const organism = {
//     name: "amoeba",
//     shape: "shapeless",
// };

// const obj = Object.create(organism);

// console.log(obj.__proto__);
// // sama as above
// console.log(Object.getPrototypeOf(obj));

const a = { foo: "bar", baz: "foo"};

const b = Object.assign({}, a);

console.log(Object.getOwnPropertyNames(a));
console.log(Object.getOwnPropertyNames(b));

// object property keys
for (const k of Object.getOwnPropertyNames(a)) {
    console.log(k);
}

// sama as above
for (const k in a) {
    console.log(k);
}

// object property values
for (const v of Object.values(a)) {
    console.log(v);
}

// same as above
for (const v in a) {
    console.log(v);
}

// looping over key-value pairs
for (const [k,v] of Object.entries(a)) {
    console.log(k,v);
}

for (const k in Object.entries(a)) {
    console.log(a);
}

for (const k of Object.entries(a)) console.log(a);
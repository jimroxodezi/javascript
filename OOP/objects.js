

// let animal = {
//     eats: true,
//     walks:() => { return `every animal walks`}
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal,
// };

// // rabbit.__proto__ = animal;+

// console.log(rabbit.eats);
// console.log(animal.walks());
// // animal.walks();







// let user = {
//     firstName: "Jimrox",
//     lastName: "Odezi",

//     set name(name) {
//         // object destructuring (structured binding)
//         [this.firstName, this.lastName] = name.split(" ");
//     },

//     get name() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };


// let admin = {
//     __proto__: user,
//     isAdmin: true,
// };

// console.log(admin.name);

// admin.name = "Odezi Ogume";

// console.log(admin.name);
// console.log(user.name);


// let animal = {
//     eats: true,
// };


// function Rabbit(name) {
//     this.name = name;
// }


// // Rabbit.prototype = animal;

// const rabbit = new Rabbit("White Rabbit");
// console.log(rabbit.__proto__);
// // console.log(rabbit.name);
// console.log(animal.__proto__);
// console.log(rabbit.__proto__.__proto__);

// let rabbit2 = new rabbit.constructor("black Rabbit");
// console.log(rabbit2.name);


// let obj = {}
// const obj2 = new Object();

// console.log(obj);
// console.log(obj.__proto__);
// // toString() returns the string representation of an object
// console.log(obj.__proto__.toString());
// console.log(obj2.__proto__);
// console.log(obj2.toString());




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
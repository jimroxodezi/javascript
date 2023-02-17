// const makeLunch = function(opts) {
//     return `Making dinner with ${opts.join(" and ")}`;
// }

// // use of normal functions
// function makeLunch1(main, side, drink) {
//     console.log(`Making lunch with ${main}, ${side} and ${drink}.`);
// }

// function makeLunch2(opts) {
//     // use of object destructuring
//     const {main, side, drink} = opts;

//     return `Making lunch with ${main}, ${side} and ${drink}`;
// }

// // use of rest params
// function makeDinner(...opts) {
//     return `Making dinner with ${opts.join(" and ")}`;
// }


// makeLunch("Eba", "melon", "water");
// makeLunch1("Eba", "melon", "water");
// console.log(makeLunch2({main: "Eba", drink: "water", side: "Melon"}));
// console.log(makeDinner("Bread", "Tea"));



// // use of arrow function expressions
// const makeLunchArrow = (...opts) =>  {
//     return `Making dinner with ${opts.join(" and ")}` // doesn't work. No this keyword
// }


function useCat() {
    let name = "Little kitten";

    return [
        () => `Meow ${name}`,
        (newname) => name =  newname
    ];
}

const [Meow, setName] = useCat();

console.log(Meow());
setName("Franky");
console.log(Meow());



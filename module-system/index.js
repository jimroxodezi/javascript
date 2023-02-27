

// const hero = require("./modcache");

// console.log(hero.name);
// hero.name = "SuperMan";
// console.log(hero.name);

// // when we require a module, it is loaded and cached for
// // subsequent reuse. Module caching can help with performance
// // but should be done carefully.
// const anotherHero = require("./modcache");
// console.log(anotherHero.name);


const math = require("./math");

const {add, subtract} = math;

// console.log(math.add(2,3));
// console.log(math.subtract(2,3));

// same as above
console.log(add(2,3));
console.log(subtract(2,3));
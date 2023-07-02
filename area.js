//code examples from a conference talk
// talk title: Reasonable JavaScript

// // Argument raddi is an array of radii
// const calculateAreaFromRadii = (radii) => {
//     const PI = 3.14159;
//     for (let i = 0; i < radii.length; i++){
//         radii[i] = PI * (radii[i] * radii[i])
//     }
//     return radii
// }


// Argument raddi is an array of radii
const calculateAreaFromRadii2 = (radii) => {
    const PI = 3.14159;

    if (!radii) throw new Error("Please provide an array of radii");

    if(!Array.isArray(radii)) throw new Error("Please provide an array type");
    let result = [];

    for (let i = 0; i < radii.length; i++){
        if (typeof radii[i] !== "number") {
            throw new Error("array values must be of type number")
        }
        result[i] = PI * (radii[i] * radii[i])
    }
    return result;
}


// console.log(calculateAreaFromRadii([1,2,3,4,5]));
console.log(calculateAreaFromRadii2([1,2,3,4,5]));


// function sing(callback) {
//     console.log("la la la la");
//     if (callback) {
//         callback();
//     }
// }

// function woo() {
//     console.log("wo wo wo wo");
// }

// sing(() => console.log("meow meow"));
// sing(woo);
// sing();


// function multiplier(factor) {
//     return x =>  x * factor;
// }

// const doubler = multiplier(2);
// // console.log(doubler);    // Function object (anonymous)

// console.log(doubler(8));



// // array methods
// let arr = [1,2,4,3,4,3];
// // arr = arr.map(x => x * 2);
// arr.fill(Math.floor(Math.random() * 100))
// console.log(arr);

// let arr2 = new Array(100);
// arr2 = arr.fill(0).map(() => Math.floor(Math.random() * 100));

// let arr3 = Array(100).fill().map(Math.random );
// // console.log(arr2);
// console.log(arr3);




// let arr4 = [1,2,3,4,5,1,2,10,12,14,13];
// sum = arr4.reduce((acc, val) => acc + val, 10);
// console.log(sum);

// min = arr4.reduce((acc, val) => acc < val ? acc : val);
// console.log(min);

// max = arr4.reduce((acc, val) => acc > val ? acc : val);
// console.log(max);


let arr5 = [1,2,3,4,5,6,7,8,9,10];
// const evenarray = arr5.filter(x => x % 2 === 0);
const evenarray = arr5.filter(x => !(x % 2));   // even shorter code.
// const oddarray = arr5.filter(x => x % 2 !== 0);
const oddarray = arr5.filter(x => x % 2);   // odd shorter code.
console.log(evenarray);
console.log(oddarray);
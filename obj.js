

const obj = {
    name: "Clown",
    age: 99,
    hello: function(){
        console.log(this)
    },
    hello1: () => {
        console.log(this)
    }
}

obj.hello();
obj.hello1();   // empty object
console.log(this);  //empty object also
console.log(globalThis); 
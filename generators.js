

// function* gen(){
//     yield "Hello World";
// }
// console.log(gen());
// console.log(gen().next());



// function* logger() {
//     console.log("running.....");
//     yield "paused";
//     console.log("running again....");
//     return "stopped";
// }
// log = logger();
// console.log(log.next());
// console.log(log.next());



// function* abc() {
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }

// for (letter of abc()){
//     console.log(letter.toUpperCase());
// }

// [...abc()].forEach((letter) => {
//     console.log(letter.toUpperCase());
// });


function* infinityAndBeyond() {
    let i = 1;
    do {
        yield i++;
    } while (true);
}

function* take(n, iterable) {
    for (item of iterable) {
        if (n <= 0) return;

        n--;
        yield item;
    }
}

function* mapper(iterable, mapFn) {
    for (item of iterable) {
        yield mapFn(item);
    }
}

// let taker = take(2, [1,2,3,4,5,6,7,8,9,0]);
// console.log(taker.next());
// console.log(taker.next());
// console.log(taker.next());

// let taken = [...take(20, infinityAndBeyond())];
// console.log(taken);
// const Squares = [...take(20, mapper(infinityAndBeyond(), (x) => x * x))];
// console.log(Squares);

// function* listener() {
//     console.log("listening.......");
//     while(true) {
//         let msg = yield;
//         console.log(`message: ${msg}`);
//     }
// }

// l = listener();
// l.next("are you there?");
// l.next("how about you?");
// l.next("blah blah");

// generators as state machines
function* bankAccount() {
    let balance = 0;

    while (balance >= 0) {
        balance += yield balance;
    }

    return "bankrupt";
}


let acct = bankAccount();
console.log(acct.next());
console.log(acct.next(50));
console.log(acct.next(-10));
console.log(acct.next(-60));
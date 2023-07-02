

let oneOrNone = (val1, val2) => {
    if ((val1 || val2)  && !(val1 && val2)) {
        return true;
    }
    return false
}

// console.log(oneOrNone(false, false));   // false
// console.log(oneOrNone(false, true));    // true
// console.log(oneOrNone(true, false));    // true
// console.log(oneOrNone(true, true));     // false


const funnySound = (str1, str2) => {
    return str1.slice(0,3) + str2.slice(0,3)
}

// console.log(funnySound("computer", "phone"));   //compho

// this function will always return the value
// of a
console.log(((a) => (b) => a)(1)(2));

c= ((a) => (b) => a)(1);

// a is bound to 1 so c will always give us 1.
console.log(c(30));
console.log(c("What's even this"));


const uniqueArr = (arr) => {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        el = arr[i];
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    }

    return newArray;
}

const uniqueArr2 = (arr) => {
    // let newArray = new Array;
    const set = new Set(arr);
    for (const e of arr) {
        set.add(e);
    }

    return Array.from(set);
}

console.log(uniqueArr([1,1,2,2,3,3,4,4,5,5]));
console.log(uniqueArr2([1,1,2,2,3,3,4,4,5,5]));

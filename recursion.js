


const zoom = (n) => {
    if (n === 0) {
        console.log("We are stopping here");
        return;
    }

    console.log(n);
    zoom(n-1);
};


console.log(zoom(20));
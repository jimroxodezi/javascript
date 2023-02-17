// multiple promises
let start=Date.now()

function task1(time){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("task 1 completed")
            console.log(`task 1 complete in ${Date.now()-start}ms`)
        }, time);
    })
}
function task2(time){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("task 2 completed")
            console.log(`task 2 complete in: ${Date.now()-start}ms`)
        }, time);
    })
}
function task3(time){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("task 3 completed")
            console.log(`task 3 complete in: ${Date.now()-start}ms`)
        }, time);
    })
}


// sequential running of promises
// task1(3000)
// .then(()=>task2(2000))
// .then(()=>task3(1000))

//console
//task 1 complete in 3008ms
//task 2 complete in: 5027ms
//task 3 complete in: 6031ms


// parallel running of promises.
Promise.all([task1(3000),task2(2000),task3(1000)]).then((value)=>{
    console.log(value)//(3)['task 1 completed',' task 2 completed',' task 3 completed']
    });

//console
// task 3 complete in: 1011ms
// task 2 complete in: 2001ms
// task 1 complete in: 3005ms
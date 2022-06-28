// Synchronous & Asynchronous

const { rejects } = require("assert");
const { resolve } = require("path/posix");

// Synchronous
/*
In Synchronous operations tasks are performed one at a time
Task-1 | Task-2 | Task-3

*/

// Asynchronous
/*
In Asynchronous operations tasks are performed paralley (dont not wait to finish first task)
Task-1
Task-2
Task-3
*/

/*
console.log("start ..... ");
console.log("process ..... ");
console.log("end ..... ");
*/

/*
console.log("start ..... ");
setTimeout(()=>{
    console.log("process ..... ");
}, 2000);
console.log("end ..... ");
*/

/*
// Problems
let a = 10;
let b = 0;
setTimeout(()=>{
    b=21;
});
console.log(a+b);
*/

// Handling Asynchronous
/*
let a = 10;
let b = 0;
let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(21);
    }, 2000);
});

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
});
*/

//main() Call Stack, Node API, Event Looop
console.log("Starting......");
setTimeout(()=>{
    console.log("Two seconds!");    
}, 2000);
setTimeout(()=>{
    console.log("Zero seconds!");    
}, 0);
console.log("Ending ......");
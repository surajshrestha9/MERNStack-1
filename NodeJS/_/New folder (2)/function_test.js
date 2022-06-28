//call the function of functions.js file

// let funcs = require('./functions');
// funcs.f1();

// var result = funcs.f2(5,6);
// console.log(result);

// var result = funcs.f3(5, 10);
// console.log(result);

//Student Info Processing
let lib = require('./functions');
let sub1 = 45;
let sub2 = 56;
let sub3 = 54;
// let sum = lib.calcTotal(sub1, sub2);
// sum = lib.calcTotal(sum, sub3);

// let sum = lib.calcTotal(lib.calcTotal(sub1, sub2), sub3);
// console.log(sum);

// var arr1 = [sub1, sub, sub3];
lib.calcSum(sub1, sub2, sub3, 50);


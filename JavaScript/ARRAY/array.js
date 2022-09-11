// const arr = [1, 2, 3];
// const arr1 = new Array(1, 2, 3);
// console.log(typeof arr1);

// const array = [1, 2, 3, 4, 5, 6];
// console.log(array);
// array[3] = 3333;
// console.log(array);
// delete array[3]; //do check it out
// console.log(array);
// console.log(array.length);

//random number within a range... [max, min] ---------------> TASK.... DO FIND RANDOM NUMBER GENERATE IN A GIVEN RANGE.

// arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(arr1);
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

//CALCULATE SUM AND AVERAGE..
// let sum = 0;
// let average = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// average += sum / arr1.length;
// console.log(sum);
// console.log(average);

//FIND MIN AND MAX NUMBER ?

// arr1 = new Array(1, 4444, 2, 3, 4, 5, 6, 7, 8, 666, 0);
// console.log();
// let min = arr1[0];
// let max = arr1[arr1.length - 1];
// console.log(min, max);
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] >= max) {
//     max = arr1[i];
//   }
//   if (arr1[i] <= min) {
//     min = arr1[i];
//   }
// }
// console.log(min);
// console.log(max);

//search number in array and show index also -------------------->

// let arr1 = new Array(1, 4444, 2, 3, 4, 5, 6, 7, 8, 666, 0);
// let userValue = 4444;
// let output = null;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === userValue) {
//     console.log(`your value ${userValue} is in ${i} index`);
//   }
// }

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] === userValue) {
//     output = "FOUND";
//   } else {
//     output = "NOT FOUND";
//   }
// }
// console.log(output);

//solving by sir....
// let arr1 = new Array(1, 4444, 2, 3, 4, 5, 6, 7, 8, 666, 0);
// let num1 = 6000;
// let result = false;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] == num1) {
//     console.log(`found ${num1} at ${i}`);
//     result = true;
//     break;
//   }
// }
// if (!result) {
//   console.log(`${num1} NOT FOUND`);
// }

// let arr1 = new Array(1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 3);
// //SEARCH 2 ----------> we hav array.... we need to search num1=3... result= 3 found at [2,..] -> 3 times
// //3 not found...
// let userValue = 7365;
// let result = false;
// let output = "";
// let length = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] == userValue) {
//     // console.log(` ${userValue} found at ${i}`);
//     // output += ` ${userValue} found at ${i}`;
//     output += `${i} `;
//     result = true;
//     break;
//   }
// }

// console.log(`${userValue} found at ${output}`);
// // console.log(`${userValue} found at ${output} - ${output.length} times`);

// if (!result) {
//   console.log("NOT FOUND");
// }

// ----> sort ... searching ...

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map .. do check it out

/////////////////////// ----------> DAY 3

// const arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);

// FORIN LOOP ---> return index ... (string); --->for of is more dynamic... must use ...
// for (let index in arr1) {
//   // console.log(`${index}`) //it gives only index 0-14
//   console.log(`${arr1[index]}`); //it gives value ... 1-2
// }

// const arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);

// FOROF --> return values .... (Number);
// for (let item of arr1) {
//   console.log(item); // it return values(element)...
// }

// FOREACH ----> return values
// const arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// arr1.forEach(function (element) { //this is also called annonomous function ...
//   console.log(element);
// });

//Arrow function (forEach) is one of the ...best function
// const arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// arr1.forEach((number, index) => {
//   console.log(`${index} : ${number}`);
// });

//////////////////////// -----------------> METHODS() ...

// const arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// // console.log(arr1.at(2)); //3

// //for --> return value
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1.at(i));
// }

// //forin --> return index
// for (let index in arr1) {
//   console.log(index);
// }

// //forof --> return value
// for (let value of arr1) {
//   console.log(value);
// }

// //forEach() --> return index and value
// arr1.forEach((index, number) => {
//   console.log(`${number}: ${index}`);
// });

////////////////////// ------------>
//concat();
// let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// arr1 = arr1.concat(999, 444, 555, 666);
// console.log(arr1);

//copyWithin();
// let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// console.log(arr1);
// arr1 = arr1.copyWithin(2, 0, arr1.length - 1);
// console.log(arr1);

//entries() // ---> it return index and value ....
// let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// let result = arr1.entries();
// // console.log(result);
// for (let value of result) {
//   console.log(value);
// }
// console.log(result.next()); //(1,2) ...
// console.log(result.next().value);

//Array.every();
// let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// const compare = (cur) => cur < 10;
// console.log(arr1.every(compare));

//Array.fill(); // fill(value, start, end)... check:
// let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// arr1 = arr1.fill(222, 2, 4);
// // arr1 = arr1.fill(3333);
// // arr1 = arr1.fill(5555, 1, 3);
// console.log(arr1);

//Array.filter();
// let arr1 = new Array(-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// // let greter = (num) => num > 5;
// // arr1 = arr1.filter(greter);
// // console.log(arr1);

// //another technique ...
// let arr11 = arr1.filter((num) => num < 6);
// console.log(arr11);

// Array.find(); ..gives only first index of find ... it return value ...of that first index
// let arr1 = new Array(1, 8, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 3, 2);
// // arr1 = arr1.find((num) => num % 2 == 0);
// // console.log(arr1);

// console.log(arr1.find((e) => e % 2 == 0));

//Array.flat();
// let arr1 = [2, 3, 4, 5, 6, [4, 5, 6, [5, 6, 7,[7,7,8]]]];
// let arr1 = [3, 4, 5, 6, [7, 8, 9]];
// let arr2 = arr1.flat(Infinity);
// console.log(arr2);

//Array.flatMap(); // it returns the value but forEach() won't return
// let arr1 = [2, 3, 4, 5, 6];
// console.log(arr1.flatMap((x) => [x * 2])); //[4,6,8,10,12]

//Array.from();
// let arr1 = [2, 3, 4, 5, 6];
// console.log(Array.from("kathmandu, nepal")); // 'k','a','t',....

/////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.map((e) => e * 2));
// console.log(arr.flatMap((e) => [e * 3]));

// const arr1 = ["it's Sunny in", "", "California"];
// // const arr1 = ["its sunny in, , califonia"];

// console.log(arr1.map((x) => x.split(" ")));
// // [["it's","Sunny","in"],[""],["California"]]

// console.log(arr1.flatMap((x) => x.split(" ")));
// // ["it's","Sunny","in", "", "California"]

let myObj = { name: "Chris", age: 38 };
console.log(myObj);
let myString = JSON.stringify(myObj);
console.log(myString);
console.log(JSON.parse(myString));

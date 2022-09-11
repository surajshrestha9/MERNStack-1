//String.prototype.at();
//description... to use for fetch specific index.
//charAt(index) -> String
// const str1 = new String("HELLO, SHIBU CHAPGAIN");
// const num1 = 6;
// if (str1.length < num1) {
//   const str2 = str1.charAt(num1);
//   console.log(str2);
// } else {
//   console.log("error");
// }

// const name = "shiva";
// console.log(name.charAt(-2));

// String.prototype.charCodeAt(); this is for ascii.... 0-255..
//charCodeAt(index);-> Number (return ASCII Number)...

// try {
//   const str1 = new String("HA, SHIBU CHAPAGAIN");
//   let index = 25;
//   if (index < str1.length) {
//     const num1 = str1.charCodeAt(index);
//     console.log(num1);
//   } else {
//     console.log("OUT OF RANGE");
//   }
// } catch (e) {
//   console.log(e);
// }

//print char and ASCII code from 0 to 255.
// 0 -> char ...
//255 -> char
//--------------->

// for (let i = 0; i < 255; i++) {
//   console.log(`${i}: ${String.fromCharCode(i)}`); //it return 65- A
// }

//String.prototype.codePointAt(); this is for unicode...
// const str1 = new String("HELLO, SHIBU CHAPAGAIN");
// let num1 = str1.codePointAt(2);
// console.log(num1);

//////////////////////

// console.log(String.fromCharCode(4444));
// console.log(String.fromCodePoint(4444));

//////////////////////
//String.prototype.conCat();
//it return string....
// try {
//   const str1 = new String("SHIVA");
//   const str2 = "chapagain";
//   console.log(str1.concat(" ", str2, " from pokhara."));
// } catch (e) {
//   console.log(e);
// }

//////////////////////
//String.prototype.endsWith(); return boolean
//syntax -> endsWith(searchString, length);
//REAL LIFE .... 4,5,6,7,8,9; UNTILL COUNT TO REACH ';'.
// const str1 = new String("HELLO, SHIBU CHAPAGAIN");
// let result = str1.endsWith("CHAPAGAIN", 15);
// console.log(result);

//////////////////////
//String.fromCharCode(); // return string.....
// console.log(String.fromCharCode(33333));
// const result = String.fromCharCode(97);
// console.log(result);

//////////////////////
//String.prototype.includes --> return true/false. (boolean);
//its prototype... so we need object..
// const str1 = new String("HELLO, SHIBU CHAPAGAIN.");
// const result = str1.includes(",");
// console.log(result);

//////////////////////
//String.prototype.indexOf(); --> return Number.
//syntax --> indexOf(searchString, position)
// const str1 = new String("HELLO, SHIBU CHAPAGAIN.");
// const result = str1.indexOf("E", 1);
// console.log(result); //return 1(if match the index of this letter)... otherwise -1....

// const str1 = new String("HELLO, SHIBU CHAPAGAIN.");
// let result = str1.indexOf("HELLO");
// // console.log(result);
// let result1 = str1.indexOf("HELLO", result + "HELLO".length);
// console.log(result1);

////////////////////////////////////// ---------> 2022-06-06
//String.prototype.lastIndexOf(); return Number
//syntax -> lastIndexOf(searchString);
// --> lastIndexOf(searchString, position);

// let firstIndex= indexOf(searchString);
// let secondIndex= indexOf(searchString, firstIndex+1);
// let thirdIndex= indexOf(searchString, secondIndex+1);

// console.log(lastIndexOf(searchString, thirdIndex+1));

// const greet = "HI, SHIBU";
// const greet = new String("HI, SHIBU shibu chibu chibu shibu ");
// console.log(greet.repeat(5));

// console.log(greet.replace("HI", "Namaste"));

// //replace.... undo::

// //slice();
// const name = "shibu chapagain, from nepal";
// console.log(name.slice(0, -6));

//TASK ::

// javascript math mdn
//1 --> Math.abs();
// console.log(Math.PI);
// let a = -5;
// console.log(Math.abs(a));

//ceil and floor....
// let a = -5.01;
// console.log(Math.ceil(a));
// console.log(Math.floor(a));

// max , min, pow, random(), round(x), sqrt(x), --> RETURN NUMBER
// Number.prototype.toFixed(N);

// let a = 5.267788;
// console.log(a);
// console.log(a.toFixed(2));
// console.log(Math.round(a));

//random... integrate with array... names -->

//ARRAY -->
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = new Array(5, 6, 7, 8, 9);
const arr3 = new Array();
arr3[2] = 1;
arr3.push(4);
arr3.push(5);

console.log(arr1);
console.log(arr2);
console.log(arr3);

arr1.pop();
console.log(arr1);
console.log(arr1.length);

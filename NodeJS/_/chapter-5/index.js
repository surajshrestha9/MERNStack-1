//Input from command line
/*
Set input from command line
Create file with input
Delete the file with input
Questions
*/

// Set input from command line
// node .\index.js 100 200 -> 300
/*
var num1 = 34;
var num2 = 78;
var num3 = num1+num2;
console.log(num3); 
*/

// console.log(process.argv); //node .\index.js 345 567
/*
var num1 = process.argv[2];
var num2 = process.argv[3];
var num3 = num1+num2;
console.log(num3); 
*/

// Create file with input
const fs = require('fs');
const input = process.argv
if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4]);
}
// Delete the file with input
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}

// Questions
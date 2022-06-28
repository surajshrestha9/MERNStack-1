// varaible
var id;//undefined
var str1 = null;
let str2 = null;
const str3 ="BROADWAY";
console.log(id, str1, str2, str3);

//assignment
id = 3;
str1 = "Raj Rai";
str2 = "Kathmandu";

//accessing
try{
    console.log(typeof id); //type
    console.log(id) //value
    //console.log(email); //ReferenceError: email is not defined
}
catch(ex){
    console.log("Error "+ex);
}

//data types
//undefined, null, boolean (true, false), number (int, float), string, object, class

//number -> floating point number -> digits after decimal
// console.log(13/6); //2.1666666666666665 -> 2.16
var num1 = 13
var num2 = 6;
var result = num1/num2;
//Number.toFixed(Number)->String
//Description
//Example -> input, process, output

var result2 = Number(result.toFixed(2)); //fixed number of digits after decimal
console.log(result2);

//type conversion
    //string-> number
    //number-> string
    //boolean -> string, number
    //number, string->boolean
    //object -> json string
    //json string -> object
    //class instance -> json string
    //json string -> class instance


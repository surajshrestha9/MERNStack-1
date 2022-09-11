// npm install crypto-js
/* 
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
...
console.log(SHA256("Message"));
#
var CryptoJS = require("crypto-js");
console.log(CryptoJS.HmacSHA1("Message", "Key"));
*/

var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");


var data ="kathmandu, Nepal";

// encrypt deccrypt data package use garera
var enc_data =SHA256(data);

var dec_data=enc_data;


// console.log(data,enc_data,dec_data);
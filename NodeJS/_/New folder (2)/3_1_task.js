<<<<<<< HEAD
//create new server
var http= require('http')
var url=require('url')
var querystring=require('querystring');
var myLib=require('./myLibs');
const { write } = require('fs');

var server=http.createServer((request,response)=>{
   
    var strUrl=request.url;
    var objRequest=url.parse(strUrl)
    // console.log(strUrl);   /////add?num1=27num2=3 //->for parsing  use url=require('url')
    // console.log(objRequest);
//terminal ko pathname ra query important cha   
    var pathname =objRequest.pathname;
    // console.log(pathname);
    var strQuery=objRequest.query
    // console.log(strQuery)

    var objQuery=querystring.parse(strQuery);
    console.log(objQuery);    
   /*          var n1=Number(objQuery.num1);
            var n2=Number(objQuery.num2);
            // console.log(n1+n2);
            n3=myLib.calculate(pathname, n1,n2);
            // console.log(n3);
            result="<h1>Result: "+n3+"</h1>"
            response.write(result); */

        if(pathname=="/success"){
            
        }

    response.end('Hello');

}).listen(5000,'127.0.0.1',()=>{
    console.log("server is started")
=======
// Tasks

// import library
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var mylib = require('./myLibs');
const path = require('path');

// create new server
var server = http.createServer((request, response)=>{
    var strUrl = request.url;
    var objRequest = url.parse(strUrl);
    // console.log(strUrl);
    // console.log(objRequest);
    var pathname  = objRequest.pathname;
    var strQuery = objRequest.query;
    var objQuery = querystring.parse(strQuery);
    // console.log(objQuery);
    // var n1=Number(objQuery.num1);
    // var n2=Number(objQuery.num2);
    // var n3= mylib.calculate(pathname, n1, n2);
    // console.log(n3);
    // var result = "<h1>Result : "+n3+"</h1>"
    // response.write(result);
    if(pathname=='/success-gallery'){
        response.write("<h1>View Our Successful Students Here! Here, we present our successful students. They have found a suitable career in the competitive professional IT world, in both national as well as international markets.</h1>")
    }
    response.end();
}).listen(8000, ()=>{
    console.log("Server started.......");
>>>>>>> 0c8c2cc7d79916c7a029e1ab3130cae236d06de9
});
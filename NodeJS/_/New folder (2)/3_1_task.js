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
});
var http= require("http");
var server=http.createServer((request,response)=>{
    response.writeHead(200, {"Content-Type":"text/html"});
    // response.write(JSON.stringify('{message:"hello from webserver"}')) //message bhane ko object ho

    // read from file
    // read from database
    // read from network
    // and redirected to browser with status code(->200-299 data fetch api)(->400 error)
    
    obj1={message:"hello from webserver"}
    strObj1=JSON.stringify(obj1)
    response.write(strObj1);
    response.end()
});
server.listen(8000,()=>{
    console.log("server is started");
});
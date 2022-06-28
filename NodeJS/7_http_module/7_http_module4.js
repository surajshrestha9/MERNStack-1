// create a sever

var http= require('http')
var url=require('url')
var server=http.createServer((req,res)=>{
    if(req.url === "/form1"){
        fs.readFile('./form-1.html', 'utf-8', function(err, html){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(html); 
        });
   
    }
    else if(req.url === "/form2"){
        fs.readFile('./form-1.html', 'utf-8' );
   
    }
    
    /* console.log(req.method+" -> "+Date());
    // console.log(req.url)
    res.writeHeader(200, {"Content-Type":"text/html"})
    res.write("hello1"); */


    /* if(req.method==="GET"){
    res.writeHeader(200, {"Content-Type":"text/html"})
    res.write("hello from GET method")
}
else if(req.method==="POST"){
    res.writeHeader(200, {"Content-Type":"text/html"})
    res.write("hello from POST method")
}
else{
    res.writeHeader(405,"unknown method", {"Content-Type":"text/html"})
    res.write("405")
} */

    res.end("hello")
});
server.listen(8000,'127.0.0.1',()=>{
    console.log("server is started")
})
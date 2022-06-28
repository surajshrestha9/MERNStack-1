//mysite-1 folder html file read which also loads css and js and images
//it manages the resources

//create a server 
var fs = require('fs');
var http= require('http')
var url=require('url')


var server=http.createServer((req,res)=>{
    //load index.html file
    if (req.url==='/') 
    {fs.readFile('./mysite-1/index.html', 'utf-8',function(err,data){
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}
else if(req.url.match("\.js$")){
    //load js file
    
}
else if(req.url.match("\.css$")){
    //load css file

}
else if(req.url.match("\.png$")){
    //load png file

}
else if(req.url.match("\.jpg$")){
    //load jpg file

}
else {
    res.writeHead(404,{"Content-Type":"text/html"})
    res.end("page not found!");

}
}).listen(8000,'127.0.0.1',()=>{
    console.log("server is started")
})

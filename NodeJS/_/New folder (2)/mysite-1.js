var http = require("http");
var url = require("url");
var fs = require("fs");

// create a server
var server = http.createServer((req, res)=>{
    //load index.html file
    if(req.url ==='/'){
        fs.readFile('./mysite-1/index.html', 'UTF-8', function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        });
    }
    else if(req.url.match("\.css$")){
        //load css file

    }
    else if(req.url.match("\.js$")){
        //load js file

    }
    else if(req.url.match("\.png$")){
        //load png file

    }
    else if(req.url.match("\.jpg$")){
        //load jpg file

    }
    else{
        res.writeHead(404, {"Content-Type":"text/html"});
        res.end("Page not found!");
    }

});
server.listen(8000);
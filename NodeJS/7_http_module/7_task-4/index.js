
var http=require('http')
var fs=require('fs')
var url=require('url')
var server=http.createServer((req,res)=>{

    // console.log(req.url)
    // render and display index.html 
    if(req.url==='/'){
        // render and display index.html
        fs.readFile('./public/index.html','utf-8',(error,data)=>{
            if(error){
                res.writeHeader(404,"page not found",{"Content-Type":"html/text"})
                res.write("404 page not found error")
                res.end();

            }

            else{
                res.writeHeader(200,{"Content-Type":"html/text"})
                res.write(data);
                res.end();
                
            }
        } )

    }
    /* else{
        //display 404 image
    } */
});
server.listen(8000,'127.0.0.1');
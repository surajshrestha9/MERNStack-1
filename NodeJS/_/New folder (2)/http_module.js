// var http=require('http');
// http.createServer(function(request, response){
//     response.write("Hello world of NODEJS");
//     response.end()
// }).listen(8000);

// http://localhost:8000/12/54/add/
var http=require('http');
http.createServer(function(req, res){
    //read values from url (n1, n2, opr) //split values ("/12/10/add/")
    //calculate based on opr
    //display result
    //Note:
        //request -> input
        //response-> output
    // console.log(request.url);
    res.write();
    res.end()
}).listen(8000);
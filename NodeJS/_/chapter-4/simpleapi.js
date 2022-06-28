//Simple API
/*
Make a Server
Create Header and API Body
Create API with static data
Put data in another file
Questions
HTTP Response Code
200
300
400
500
*/

// Make a Server
const http = require('http');
const data = require('./data');

http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'application\json'});
    //response.write(JSON.stringify({id:1,name:'Raj Rai',address:'KTM'}));
    response.write(JSON.stringify(data));
    response.end();
}).listen(8000);

//test api in browse
//test api postman tool
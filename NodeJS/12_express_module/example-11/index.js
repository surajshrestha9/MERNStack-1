// npm init
// npm install express
// npm install ejs

//create new app
var express = require("express");
var app = express();
app.set('view engine', 'ejs');

app.get('', (request, response)=>{
    // response.send("Hello world of express");
    response.render('index'); //views/index.ejs
});

app.listen(8000);
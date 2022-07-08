// npm install express
// npm install ejs

var express=require('express')
var app=express()

app.set('view engine','ejs')

app.get('',(request,response)=>{
    response.render('forms');
});
//create url pattern to receive data form webform
// process them, and redirect to display on template(ejs)
app.listen(8000,()=>{
    console.log("server is started")
})
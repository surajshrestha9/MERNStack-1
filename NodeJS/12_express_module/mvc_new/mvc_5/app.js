import express from "express";
const app=express();
const port =process.env.PORT ||8000

app.get('/person/all',(request,response)=>{
    response.send("<h1>All Persons</h1>");//database
});
app.get('/person/delete/:id',(request,response)=>{
    response.send("<h1>record no: ${request.params.id} delete sucessfully</h1>");
});
app.listen(port,()=>{
    console.log(`listening http://127.0.0.1:${port}`);
})
import express from 'express';
const app = express();
const port = process.env.PORT || '8000';

app.get('/person/all', (request, response)=>{
    response.send("<h1>All Persons</h1>");
});
<<<<<<< HEAD
app.get('/person/delete/:id', (request, response)=>{
=======
app.get('/person/:id', (request, response)=>{
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    var {id} = request.params;
    if(id==5){
        response.send(`<p>Error to delete record ${request.params.id}</p>`);
    }
    else{
        response.send(`<p>Record no ${request.params.id} delete successfully</p>`);
    }    
});
app.listen(port);
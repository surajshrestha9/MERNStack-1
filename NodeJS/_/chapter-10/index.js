//Middleware
/*
Introduction
Creating middleware
Apply middleware on routes
Types of middleware
- Application level
- Route level
- Error handling
- Built-in
- Third-party

Questions
*/

const express = require('express');
const app = express();

const requestFilter=(request, response, next)=>{
    //console.log('requestFilter');
    if (!request.query.age){
        response.send("Please provide age");
    }
    else if(request.query.age<18){
        response.send("You cannt access the contents");
    }
    else{
        next();
    } 
}

app.use(requestFilter);

app.get('/', (request, response)=>{
    response.send("Welcome to Home page");
});

app.get('/users', (request, response)=>{
    response.send("Welcome to Users page");
});

app.listen(8000);
// Node Express
/*
Introduction
Installation
Examples
Questions
*/

// Introduction
/*
Node Express is package of NodeJS. Specially is used to create APIs.
- Route Handling
- API
- Middlewares
- Request Handling
- HTML/CSS/Images
*/

// Installation
// nmp install express

// Examples
const express = require('express');
const app = express();
app.get('', (request, response)=>{
    response.send("Welcome to ExpressJS");
});

app.get('/about', (request, response)=>{
    response.send("About Us");
});

app.get('/getvalues', (request, response)=>{
    console.log("Data from url = ", request.query)
    response.send(`Data =${request.query.name}`);
});

app.listen(8000);

// Questions
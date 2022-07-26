//Render HTML and JSON
/*
HTML Tags
JSON Data
Link Pages
Questions    
*/

// HTML Tags
const express = require('express');
const app = express();

app.get('', (request, response)=>{
    response.send("<h1>Welcome to ExpressJS</h1>"); //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client    
});

app.get('/about', (request, response)=>{
    // response.send("<h1>Welcome to ExpressJS</h1>"); //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client    
    response.send(`
        <input type="text" placeholder="User name"/>
        <button>Click me</button>
    `);
});

// Render JSON Data
app.get('/services', (request, response)=>{
    response.send([
        {id:1, name:'Raj', caddress:'KTM'},
        {id:2, name:'Shree', caddress:'BHK'}
    ]);
});

// Link Pages
app.get('/home', (request, response)=>{
    response.send(`
        <h1>Welcome to ExpressJS</h1>
        <h3><a href=''>Home</a></h3>
        <h3><a href='/about'>about</a></h3>
        <h3><a href='/services'>Services</a></h3>
    `); //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client    
});

app.listen(8000);

// Questions
//How to get values from url with parameter


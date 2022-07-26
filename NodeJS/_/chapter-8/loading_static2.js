//Removing extension of static page
const express = require('express');
const path = require('path');

const app = express()
const templatePath = path.join(__dirname, 'templates')
//app.use(express.static(templatePath));

app.get('', (request, response)=>{
    response.sendFile(`${templatePath}/index.html`);
});

app.get('/about', (request, response)=>{
    response.sendFile(`${templatePath}/about.html`);    
});

//Creating 404 Page
//Apply 404 Page

app.get('*', (request, response)=>{
    response.sendFile(`${templatePath}/404.html`);
});

app.listen(8000);

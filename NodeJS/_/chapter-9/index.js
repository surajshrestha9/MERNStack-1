//Template Engine
/*
Introduction
Install ejs template package
Setup dynamic routing
Make Dynamic Page
Questions
*/

//Template Engine
// Introduction
// Creating dynamic pages

// Install ejs template package
// npm install ejs

// Setup dynamic routing

const express = require('express');
const path = require('path');
const app = express();
const viewsPath = path.join(__dirname, 'views');

// Make Dynamic Page
// app.use(express.static(viewsPath));
/*
app.get('', (_, response)=>{
    response.sendFile(`${viewsPath}/index.html`);
});
*/
app.set('view engine', 'ejs');

app.get('/profile',(_, response)=>{
    response.render('profile');
});

app.get('/myprofile',(_, response)=>{
    const user = {
        fullname:'Raj Rai',
        caddress: 'KTM'
    }
    response.render('myprofile',{user});
});
app.listen(8000);
// Questions
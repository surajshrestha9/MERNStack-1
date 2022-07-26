//Dynamic Page
/*
Looping in ejs
Header File
Common Header File
Questions
*/
const express = require('express');
const path = require('path');
const app = express();
const viewsPath = path.join(__dirname, 'views');
app.set('view engine', 'ejs');

//Dynamic Page
// Looping in ejs
app.get('/profile',(_, response)=>{
    const user = {
        fullname:'Raj Rai',
        caddress: 'KTM',
        skills:['php','js','c++']
    }
    response.render('myprofile2',{user});
});

app.get('/login',(_, response)=>{    
    response.render('login');
});

app.listen(8000);

// Header File
// views-> common -> header.ejs

// Common Header File
//<%- include('common/header'); %>

// Questions
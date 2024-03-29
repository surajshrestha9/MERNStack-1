// npm install --save cookie-parser

<<<<<<< HEAD
=======

>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
// npm install serve-favicon
import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import {PersonModel} from './databases/mongoose_client.js';
import {join } from 'path';

import cookieParser from 'cookie-parser';

const options = {
    dotfiles:"deny",
    etag:false,
    extensions:['html', 'xhtml'],
    index:false,
    maxAge:'1d',
    redirect:false,
    setHeader:function(request, response, status){
        response.set('x-timestamp', Date.now());
    }
};

app.set("view engine", "ejs");
// Static Files
// app.use(express.static('public'));
app.use(express.static(join(process.cwd(), 'public'), options));

//Virtual
/*
app.use('/css', express.static(join(process.cwd(), 'public/css')));
app.use('/js', express.static(join(process.cwd(), 'public/js')));
app.use('/images', express.static(join(process.cwd(), 'public/images')));
*/

// Post Method
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Cookies
app.use(cookieParser());

app.use('/', web);

app.listen(port, ()=>{
    console.log(`Listening http://127.0.0.1:${port}`);
});
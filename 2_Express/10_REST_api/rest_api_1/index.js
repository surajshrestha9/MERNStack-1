// npm install serve-favicon
import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/routers.js';
<<<<<<< HEAD
<<<<<<< HEAD
import {join, parse } from 'path';
import bodyParser from 'body-parser'
=======
import {join } from 'path';
import bodyParser from 'body-parser';
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
=======
import {join } from 'path';
import bodyParser from 'body-parser';
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

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
<<<<<<< HEAD
<<<<<<< HEAD
// post Method
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

// Post Method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
app.use('/', web);
// app.use('/api/', web);

app.listen(port, ()=>{
    console.log(`Listening http://127.0.0.1:${port}`);
});
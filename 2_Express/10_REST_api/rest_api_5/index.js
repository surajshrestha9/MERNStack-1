<<<<<<< HEAD
<<<<<<< HEAD
// npm install serve-favicon
import express from 'express';
const multer =require("multer")

=======
import express from 'express';
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
import express from 'express';
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
import bodyparser from 'body-parser';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/routers.js';
import {join } from 'path';

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

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// app.use('/', web);
app.use('/api/', web);

app.listen(port, ()=>{
    console.log(`Listening http://127.0.0.1:${port}`);
});
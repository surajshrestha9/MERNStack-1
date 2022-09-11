// npm install nunjucks
import express from 'express';
const app = express();
import path from 'path';
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import nunjucks from 'nunjucks';

<<<<<<< HEAD

//view engine set ganu pardaina
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
nunjucks.configure(path.resolve('views'),{
    express:app,
    autoescape:true,
    noCache:false,
    watch:true
});

app.use('/', web);
app.listen(port);
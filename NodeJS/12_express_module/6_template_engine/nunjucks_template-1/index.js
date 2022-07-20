// npm install nunjucks
import express from 'express';
const app = express();
import path from 'path';
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import nunjucks from 'nunjucks';


//view engine set ganu pardaina
nunjucks.configure(path.resolve('views'),{
    express:app,
    autoescape:true,
    noCache:false,
    watch:true
});

app.use('/', web);
app.listen(port);
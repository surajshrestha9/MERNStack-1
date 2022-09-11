import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import {join} from 'path';

// Static Files
// app.use(express.static('public'));
<<<<<<< HEAD
<<<<<<< HEAD
app.use(express.static(join(process.cwd(), 'public')));//static content chai ya bata use hunxa
//css,image,js,music movies, pdf etc
=======
app.use(express.static(join(process.cwd(), 'public'))); //css, image, js, music, movies, and files (csv, pdf, txt, ini, xml)
>>>>>>> ef527169f4ddf97cd705d35ab317cfd13391b4be
=======
app.use(express.static(join(process.cwd(), 'public'))); //css, image, js, music, movies, and files (csv, pdf, txt, ini, xml)
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

//Virtual
/*
app.use('/css', express.static(join(process.cwd(), 'public/css')));
app.use('/js', express.static(join(process.cwd(), 'public/js')));
app.use('/images', express.static(join(process.cwd(), 'public/images')));
*/
app.use('/', web);
app.listen(port);
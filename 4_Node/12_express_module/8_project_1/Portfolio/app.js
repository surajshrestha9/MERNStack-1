import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import {join} from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
=======

//load static contents from public folder
app.use(express.static(join(process.cwd(), 'public')));
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3

app.use(express.static(join(process.cwd(), 'public')));
=======

//load static contents from public folder
app.use(express.static(join(process.cwd(), 'public')));

>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
app.set('view engine', 'ejs');
app.use('/', web);

app.listen(port, ()=>{
	console.log(`Listening at http://127.0.0.1:${port}`);
});
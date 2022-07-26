import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';
import {join} from 'path';
<<<<<<< HEAD
=======

//load static contents from public folder
app.use(express.static(join(process.cwd(), 'public')));
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3

app.use(express.static(join(process.cwd(), 'public')));
app.set('view engine', 'ejs');
app.use('/', web);

app.listen(port, ()=>{
	console.log(`Listening at http://127.0.0.1:${port}`);
});
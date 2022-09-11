import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';

<<<<<<< HEAD
app.use('/', web);
=======
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', web);

>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
app.listen(port);
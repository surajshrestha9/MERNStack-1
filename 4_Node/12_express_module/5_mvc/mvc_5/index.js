import express from 'express';
const app = express();
const port = process.env.PORT || '8000';
import web from './routes/web.js';

app.use('/', web);
app.listen(port);
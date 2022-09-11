import express from 'express';
const app = express();
const port = process.env.PORT || '8000';

<<<<<<< HEAD
import person from './routes/person.js' //import person
app.use('/person', person); //load person

=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
app.listen(port);
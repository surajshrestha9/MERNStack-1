import express from "express";
const app = express();
const port = process.env.PORT || 8000

import person from './routes/person.js'//import person
app.use('/person', person);//load person
import student from './routes/student.js'//import student
app.use('/student', student);//load student

app.listen(port, () => {
    console.log(`listening http://127.0.0.1:${port}`);
})


//program modular mainatainable
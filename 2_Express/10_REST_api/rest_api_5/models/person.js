// npm install mongoose
import mongoose from "mongoose";

// Connect with database server
mongoose.connect('mongodb://localhost:27017/apidb')
    .then(() => console.log('Connected to MongoDB server successfully!'))
    .catch(err => console.error('Error to connect with database server', err));

// Creating Schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
<<<<<<< HEAD
<<<<<<< HEAD
    photo: {type: file, required: true, trim:true }
=======
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
});

// Creating Model
const Person = mongoose.model("Person", personSchema);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======

>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
export {Person};
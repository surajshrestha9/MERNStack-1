import {join} from 'path'
import {Person} from '../models/person.js';

const defaultController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("All Persons");    
    response.status(200).send({message:"Welcome to RestAPI-V3"});
}

const homeController = async (request, response)=>{
    const persons = await Person.find();
    response.status(200).send(persons);
}

const singleController = async (request, response)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    const {id} = request.params; 
    const person = await Person.findById(id); //_id

=======
    const {id} = request.params;
    const person = await Person.findById(id); //_id
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
    const {id} = request.params;
    const person = await Person.findById(id); //_id
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    if(!person){
        response.status(400).send({'status':false});
    }
    else{
<<<<<<< HEAD
<<<<<<< HEAD
        response.status(400).send({'status':true, 'data':person});
=======
        response.status(200).send({'status':true, 'data':person});
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
        response.status(200).send({'status':true, 'data':person});
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    }
}

const newController = (request, response)=>{
    var {name, address} = request.body;
    var person = new Person({name, address});
    person.save()
    .then(data=>{
        response.status(201).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });    
}

<<<<<<< HEAD
<<<<<<< HEAD
const putController = async (request, response)=>{  //update
    var {id} = request.params;
    var {name, address} = request.body;
    var tmpPerson = {id, name, address}

    await Person.findByIdAndUpdate(id,{     //model ko fxn

=======
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
const putController = async (request, response)=>{
    var {id} = request.params;
    var {name, address} = request.body;
    var tmpPerson = {id, name, address}
    await Person.findByIdAndUpdate(id,{
<<<<<<< HEAD
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
        name:name,
        address:address
    })
    .then(data =>{
        response.status(202).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });     
}

// patch
<<<<<<< HEAD
<<<<<<< HEAD

/* 
=======
/*
>>>>>>> 6363238a88ec9eb587c6be7a575a0b9d30f82f98
=======
/*
>>>>>>> a88ddbd727afcf8d32d7b42443f993674ddc99db
=======
/*
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
await Person.findByIdAndUpdate(id,{request.body})
*/

const delController = async (request, response)=>{
    var {id} = request.params;
    await Person.findByIdAndRemove(id)
    .then(data =>{
        response.status(200).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });
}

export{ defaultController, homeController, singleController, newController, putController, delController }
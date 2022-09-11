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
    const {id} = request.params;
<<<<<<< HEAD
<<<<<<< HEAD
    const person = await Person.findById(id);  //mongo ko find id
=======
    const person = await Person.findById(id); //_id
>>>>>>> 6363238a88ec9eb587c6be7a575a0b9d30f82f98
=======
    const person = await Person.findById(id); //_id
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    if(!person){
        response.status(400).send({'status':false});
    }
    else{
        response.status(400).send({'status':true, 'data':person});
    }
}

const newController = (request, response)=>{
    var {name, address} = request.body;
    var person = new Person({name, address});
    person.save()
    .then(data=>{
        response.status(400).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });    
}

const putController = async (request, response)=>{
    var {id} = request.params;
    var {name, address} = request.body;
    var tmpPerson = {id, name, address}
<<<<<<< HEAD
<<<<<<< HEAD
    await Person.findByIdAndUpdate(id,{     //model ko fxn
=======
    await Person.findByIdAndUpdate(id,{
>>>>>>> 6363238a88ec9eb587c6be7a575a0b9d30f82f98
=======
    await Person.findByIdAndUpdate(id,{
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
        name:name,
        address:address
    })
    .then(data =>{
        response.status(400).send({'status':true, 'data':data});
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
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
await Person.findByIdAndUpdate(id,{request.body})
*/

const delController = async (request, response)=>{
    var {id} = request.params;
    await Person.findByIdAndRemove(id)
    .then(data =>{
        response.status(400).send({'status':true, 'data':data});
    })
    .catch(err=>{
        response.status(500).send({status:false});
    });
}

export{ defaultController, homeController, singleController, newController, putController, delController }
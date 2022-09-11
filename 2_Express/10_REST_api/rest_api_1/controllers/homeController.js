<<<<<<< HEAD
import { join } from 'path'
import { pid } from 'process';

var objPersons = [
    { pid: 1, name: 'Krishna Aryal', Address: 'ktm' },
    { pid: 2, name: 'asim', Address: 'lat' },
    { pid: 3, name: 'suraj', Address: 'ktm' },
    { pid: 4, name: 'bishal', Address: 'lat' },
    { pid: 5, name: 'mitra', Address: 'nawalparasi' }
=======
import {join} from 'path'

var objPersons = [
    {pid:1, name:'Raj', address:'KTM'},
    {pid:2, name:'Asim', address:'Lat'},
    {pid:3, name:'Suraj', address:'KTM'},
    {pid:4, name:'Bishal', address:'Lat'},
    {pid:5, name:'Mitra', address:'Nawalparasi'}
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
];

const indexController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Welcome to RestAPI-V1."});
}

const homeController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    // create an array of person object
    // response.status(200).send({persons:"All Persons."});
    response.status(200).send(objPersons);
}
<<<<<<< HEAD
const homeController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
}
const singleController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // var {id} =request.params

    // receive id
    var { id } = request.params
    console.log(id);
    var result = {};
    objPersons.forEach((item, index, array) => {
        console.log(item)
        if (item.pid == id) {
            result.result = item    //second result chai object ko component
            result.status = true  //await f3(1)
        }
        else {
            result.status = false   //'record  not found'

        }
    });
    // f1()
    // f2()

    /* 
    var f3=(code) =>{
        if (code==0){
            reurn=false;
        }
        else{
            reutrn true;
        }
    }
    */

    // search record on onjPersons based on id
    console.log(result);
    response.status(200).send({ person: `Individual Person.-${id}` });
    // console.log(request.params)
=======
=======
const singleController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    var {id} = request.params;
    console.log(id);
    //search record on objPersons based on id
    var result ={}; 
    objPersons.forEach((item, index, array)=>{
        console.log(item);
        if(item.pid==id){
            result.result=item;
            result.status=true; //await f3(1)
        }
        else{
            result.status=false;
        }
    });
    console.log(result);
    // response.status(200).send({person:`Individual Person-${id}`});
    response.status(200).send(result);
<<<<<<< HEAD
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
}
//f1()
//f2()
/*
var f3 = (code)=>{
    if(code == 0){
        return false;
    }
    else{
        return true;
    }
}
*/

<<<<<<< HEAD
const newController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
<<<<<<< HEAD

    // receive values
    var { pid, name, address } = request.body;  //post bata values receive garna
    console.log(pid, name, address);
    //    add value on objPersons as an Object
    var objPerson={pid:pid,name:name,address:address}
    objPersons.push=objPerson
    response.status(201).send({ status:true,result:objPerson });
=======
=======
const newController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    // Receive values
    var {pid, name, address} =  request.body;
    console.log(pid, name, address);
    //add value on objPersons as an Object
    var objPerson = {pid:pid, name:name, address:address};
    objPersons.push(objPerson);
    response.status(201).send({status:true, result:objPerson});
<<<<<<< HEAD
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
}

const putController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
<<<<<<< HEAD
    response.status(200).send({ message: "Update person." });
}
const patchController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({ message: "Update person partially " });
=======
=======
}

const putController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    response.status(200).send({message:"Update person."});
}

const patchController = (request, response)=>{
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({message:"Update person partially."});
<<<<<<< HEAD
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
}

const delController = (request, response) => {
=======
}

const delController = (request, response)=>{
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send("Delete person.");
}

<<<<<<< HEAD
<<<<<<< HEAD
export { indexController, homeController, singleController, newController, putController, patchController, delController }
=======
export{ indexController, homeController, singleController, newController, putController, patchController, delController}
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
=======
export{ indexController, homeController, singleController, newController, putController, patchController, delController}
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

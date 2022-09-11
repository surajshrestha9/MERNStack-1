import { join } from 'path'
import { pid } from 'process';

var objPersons = [
    { pid: 1, name: 'Krishna Aryal', Address: 'ktm' },
    { pid: 2, name: 'asim', Address: 'lat' },
    { pid: 3, name: 'suraj', Address: 'ktm' },
    { pid: 4, name: 'bishal', Address: 'lat' },
    { pid: 5, name: 'mitra', Address: 'nawalparasi' }
];
const indexController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({ message: "index ho hai" });
}
const homeController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    //create an array of person object

    // response.status(200).send({persons:"All Persons."});
    response.status(200).send(objPersons);
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
}

const newController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));

    // receive values
    var { pid, name, address } = request.body;  //post bata values receive garna
    console.log(pid, name, address);
    //    add value on objPersons as an Object
    var objPerson={pid:pid,name:name,address:address}
    objPersons.push=objPerson
    response.status(201).send({ status:true,result:objPerson });
}

const putController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({ message: "Update person." });
}
const patchController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send({ message: "Update person partially " });
}

const delController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    response.status(200).send("Delete person.");
}

export { indexController, homeController, singleController, newController, putController, patchController, delController }
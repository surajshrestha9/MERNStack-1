import { join } from 'path'

var persons = [
    { id: 101, name: "Raj Rai", address: 'Ktm' },
    { id: 102, name: "Kiran Joshi", address: 'Lat' },
    { id: 103, name: "Sheetal Thapa", address: 'Ktm' },
    { id: 104, name: "Ramesh Sharma", address: 'Lat' },
    { id: 105, name: "Reeta Bhatta", address: 'Ktm' }
];

<<<<<<< HEAD
const defaultController = (request, response) => {
//    response.status(200).send({message:"Welcome to REST-API_V2"});
   response.status(200).send({status:true,data:"Welcome to REST-API_V2"});
}
// display all
const homeController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("All Persons");
    response.json({status:true,data:persons});
}

// search based on id
const singleController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Individual Person");
    var person = persons.filter(function (person) {  //here person->data  //filter le persons ko individual items return garcha
=======
const homeController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("All Persons");
    response.json(persons);
}

const singleController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Individual Person");
    var person = persons.filter(function (person) {
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
        if (person.id == request.params.id) {
            return true;
        }
    });
    if (person.length == 1) {
<<<<<<< HEAD
        response.json({status:true, data:person[0]})
    } else {
        response.status(404);//Set status to 404 as not found
        response.json({status:false, data: "Not Found" });
=======
        response.json(person[0])
    } else {
        response.status(404);//Set status to 404 as not found
        response.json({ message: "Not Found" });
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    }
}

const newController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Add new person");    
    console.log(request.body);
    var newId = persons[persons.length - 1].id + 1;
<<<<<<< HEAD
    persons.push({ id: newId, name: request.body.name, address: request.body.address});
=======
    persons.push({ id: newId, name: request.body.name, address: request.body.address, weight: request.body.weight });
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    response.json({ message: "New person created." });
}

const putController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Update person");
<<<<<<< HEAD
    var updateIndex = persons.map(function (person) {   //fxn receives id    //map garrera find garyo
=======
    var updateIndex = persons.map(function (person) {
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
        return person.id;
    }).indexOf(parseInt(request.params.id));
    if (updateIndex === -1) {
        //Movie not found, create new
        persons.push({
            id: request.params.id,
            name: request.body.name,
            address: request.body.address,
        });
        response.json({ message: "New Person Created." });
    } else {
        //Update existing movie
        persons[updateIndex] = {
            id: request.params.id,
            name: request.body.name,
            address: request.body.address,
        };
        response.json({ message: "Person id " + request.params.id + " updated." });
    }
}
<<<<<<< HEAD
const patchController = (request, response) => {

}
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

const delController = (request, response) => {
    // response.render(join(process.cwd(), 'views', 'index'));
    // response.status(200).send("Delete person");
    // console.log(request.params.id);
<<<<<<< HEAD
=======
    console.log(request.params.id);
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    var removeIndex = persons.map(function (person) {
        return person.id;
    }).indexOf(parseInt(request.params.id));
    console.log(removeIndex);
    if (removeIndex === -1) {
        response.json({ message: "Not found" });
    } else {
        persons.splice(removeIndex, 1);
        response.send({ message: "Person id " + request.params.id + " removed." });
    }
}

<<<<<<< HEAD
export { defaultController,homeController, singleController, newController, putController,patchController, delController }
=======
export { homeController, singleController, newController, putController, delController }
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

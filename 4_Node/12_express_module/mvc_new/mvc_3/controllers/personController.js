import {join} from 'path'

const allPerson = (request, response) => {  //  /person/all- is a controller
    // response.send("<h1>All Persons</h1>");//database

    response.sendFile(join(process.cwd(),'views/person','all.html'))
};
const deletePerson = (request, response) => {
    var { id } = request.params
    // response.send(`<h1>record no: ${request.params.id} delete sucessfully</h1>`);
    // response.send(`<h1>record no: ${id} delete sucessfully</h1>`);


    response.sendFile(join(process.cwd(),'views/person','delete.html'))
};

export { allPerson, deletePerson }
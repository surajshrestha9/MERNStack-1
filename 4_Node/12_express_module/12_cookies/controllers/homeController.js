import { join } from 'path'
// import {PersonModel} from '../databases/mongoose_client.js';

const homeController = async (request, response) => {    
    response.render(join(process.cwd(), 'views', 'index'));
}

const createController = (request, response) => {
    response.cookie('tmpUser', 'Raj Rai');
    response.send('cookie create successfully');
}

<<<<<<< HEAD
const displayController = (request, response) => {
=======
const displayController = async (request, response) => {
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    response.send(request.cookies);
}

const pageNotFound = (request, response) => {
    response.send(200, "404 Page not found");
}

export { homeController, createController, displayController, pageNotFound };
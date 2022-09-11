import { join } from 'path'
// import {PersonModel} from '../databases/mongoose_client.js';

const homeController = async (request, response) => {
    response.render(join(process.cwd(), 'views', 'index'));
}

const createController = (request, response) => {
    response.cookie('id', '1');
    response.cookie('name', 'Raj Rai', {expire: 5*1000 + Date.now()});
    response.cookie('address', 'Kathmandu, Nepal', {maxAge: 5*1000});
    // http only, prevents JavaScript cookie access
    response.cookie('email', 'Raj raj@gmail.com', {maxAge: 5*1000, httpOnly: true});
    response.send('Cookies create successfully');
<<<<<<< HEAD
<<<<<<< HEAD:2_Express/11_cookies/cookie_2/controllers/homeController.js
<<<<<<< HEAD
    // lifetime N  ??
}

const displayController = async (request, response) => {
    // request.cookie - create new;
    // request.cookies - get all
    var strCookies = JSON.stringify(request.cookies);
    console.log(strCookies);
    var objCookies = JSON.parse(strCookies);  //json to object
=======
    //life time  ?
=======
>>>>>>> 5bea8968b6a5cc113f9a2221b5ef507832bdd0c9:2_Express/8_cookies/cookie_2/controllers/homeController.js
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
}

const displayController = async (request, response) => {
    var strCookies = JSON.stringify(request.cookies);
<<<<<<< HEAD
<<<<<<< HEAD:2_Express/11_cookies/cookie_2/controllers/homeController.js
    var objCookies = JSON.parse(strCookies); //json to object
>>>>>>> 434034e6268582d97e6179b4a63bc2544041c68e
=======
    console.log(strCookies);
    var objCookies = JSON.parse(strCookies);
>>>>>>> 5bea8968b6a5cc113f9a2221b5ef507832bdd0c9:2_Express/8_cookies/cookie_2/controllers/homeController.js
=======
    console.log(strCookies);
    var objCookies = JSON.parse(strCookies);
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    
    // Looping in Cookies-1
    for (var key in objCookies) {
        console.log(key, ":", objCookies[key]);
    }

    // Looping in Cookies-2
    Object.keys(objCookies).forEach(key => {
        console.log("key: ", key);
        console.log("Value: ", objCookies[key]);
    });
    response.clearCookie('email'); //Delete Cookies
    response.send(objCookies);
}

const pageNotFound = (request, response) => {
    response.send(200, "404 Page not found");
}

export { homeController, createController, displayController, pageNotFound };
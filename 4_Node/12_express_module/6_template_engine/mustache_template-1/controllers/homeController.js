import {join} from 'path' 
const homeController=(request, response)=>{
    // response.send("<h2>Welcome to MySite.com</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\index.html');
    // response.sendFile(join(process.cwd(), 'views', 'index.html'));
    
    var objPerson = {
        id:1,
        name:'Raj Rai',
        address:'KTM'
    }
<<<<<<< HEAD
<<<<<<< HEAD
    response.render('index.html',{id:1, name:'Raj Rai', address:'KTM'});
    // response.render('index.html',objPerson);
=======

    //response.render('index.html',{id:1, name:'Raj Rai', address:'KTM'});
    response.render('index.html',objPerson);
>>>>>>> ef527169f4ddf97cd705d35ab317cfd13391b4be
=======

    //response.render('index.html',{id:1, name:'Raj Rai', address:'KTM'});
    response.render('index.html',objPerson);
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
}
export {homeController}
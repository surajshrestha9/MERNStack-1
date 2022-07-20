import {join} from 'path' 

const aboutController=(request, response)=>{
    // response.send("<h2>About Us</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\about.html');
    // response.sendFile(join(process.cwd(), 'views', 'about.html'));
<<<<<<< HEAD
    // data connectivity
    // record (s) fetch and send to *.ejs file
=======
    
    // database connectivity
    // record(s) fetch and send to *.ejs file
>>>>>>> ef527169f4ddf97cd705d35ab317cfd13391b4be
    response.render(join(process.cwd(), 'views', 'about'), {title:'About Us...!'});
}

export {aboutController}
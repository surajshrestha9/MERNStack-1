import {join} from 'path' 

const aboutController=(request, response)=>{
    // response.send("<h2>About Us</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\about.html');
<<<<<<< HEAD
    response.sendFile(join(process.cwd(), 'views', 'about.html'));
=======
    // response.sendFile(join(process.cwd(), 'views', 'about.html'));
    
    // database connectivity
    // record(s) fetch and send to *.ejs file
    response.render(join(process.cwd(), 'views', 'about'), {title:'About Us...!'});
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
}

export {aboutController}
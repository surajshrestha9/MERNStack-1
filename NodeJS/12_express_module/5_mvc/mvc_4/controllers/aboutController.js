import {join} from 'path' 

const aboutController=(request, response)=>{
    // response.send("<h2>About Us</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\about.html');
    // response.sendFile(join(process.cwd(), 'views', 'about.html'));
    // response.render(join(process.cwd(), 'views', 'about'));
    response.render(join(process.cwd(), 'views', '/person/all'));
    // process.cwd() // __dirname()
    // process.cwd() -> Current folder path/, views/, person/allpersons
}

export {aboutController}
import {join} from 'path' 

const displayController=(request, response)=>{
    // response.send("<h2>About Us</h2>");
    // response.sendFile('D:\\Learning\\MERN-Stack\\CourseNotes\\NodeJs\\13_express_module\\5_mvc\\mvc_4\\views\\about.html');
    // response.sendFile(join(process.cwd(), 'views', 'about.html'));
    var data={'value1':56}
<<<<<<< HEAD
<<<<<<< HEAD
    // data from file xml,pdf,ini, database, excel, csv   ejs ma core javascript matra hunxa
=======
    //data from file, xml, ini, pdf, database, excel, csv
>>>>>>> ef527169f4ddf97cd705d35ab317cfd13391b4be
=======
    //data from file, xml, ini, pdf, database, excel, csv
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
    response.render('display', {data});
}

export {displayController}
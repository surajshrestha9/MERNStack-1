import {join} from 'path'

const homeController = (request, response)=>{
    response.sendFile(join(process.cwd(), 'views', 'index.html'));
<<<<<<< HEAD
<<<<<<< HEAD
    // response.render(join(process.cwd(), 'views', 'index'));  ejs garya bhaye chai
=======
    // response.render(join(process.cwd(), 'views', 'index'));
>>>>>>> ef527169f4ddf97cd705d35ab317cfd13391b4be
=======
    // response.render(join(process.cwd(), 'views', 'index'));
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
}

export{homeController}
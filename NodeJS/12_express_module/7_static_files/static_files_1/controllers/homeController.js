import {join} from 'path'

const homeController = (request, response)=>{
    response.sendFile(join(process.cwd(), 'views', 'index.html'));
<<<<<<< HEAD
    // response.render(join(process.cwd(), 'views', 'index'));  ejs garya bhaye chai
=======
    // response.render(join(process.cwd(), 'views', 'index'));
>>>>>>> ef527169f4ddf97cd705d35ab317cfd13391b4be
}

export{homeController}
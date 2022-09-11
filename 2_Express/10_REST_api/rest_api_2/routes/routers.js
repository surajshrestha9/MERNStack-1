import express from 'express';
const router = express.Router();
<<<<<<< HEAD
import { defaultController,homeController, singleController, newController, putController,patchController, delController } from '../controllers/homeController.js';

<<<<<<< HEAD
router.get('/', defaultController);   //http://127.0.0.1:8000/
router.get('/persons/', homeController);   //http://127.0.0.1:8000/api/persons/
router.get('/persons/:id', singleController); //http://127.0.0.1:8000/api/persons/1
router.post('/persons/', newController); //http://127.0.0.1:8000/api//persons
router.put('/persons/:id', putController);     //http://127.0.0.1:8000/api//persons/1
router.patch('/persons/:id', patchController);
router.delete('/persons/:id', delController);//http://127.0.0.1:8000/api//persons/1
=======
=======
import { homeController, singleController, newController, putController, delController } from '../controllers/homeController.js';

>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
router.get('/persons/', homeController);
router.get('/persons/:id', singleController);
router.post('/persons/', newController);
router.put('/persons/:id', putController);
// router.patch('/persons/:id', putController);
router.delete('/persons/:id', delController);
<<<<<<< HEAD
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

export default router;
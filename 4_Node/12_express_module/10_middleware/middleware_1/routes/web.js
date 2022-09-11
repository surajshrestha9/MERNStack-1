import express from 'express';
const router = express.Router();

import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';

<<<<<<< HEAD
<<<<<<< HEAD
router.get('/', homeController); //127.0.0.1/->middleware(appliction level ->homecontoller
=======
router.get('/', homeController); //127.0.0.1/-> middleware-> homeController
>>>>>>> b5fd1dc7461037e1fa1697b5e1041fb3c743cbf9
=======
router.get('/', homeController); //127.0.0.1/-> middleware-> homeController
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
router.get('/about', aboutController);

export default router;
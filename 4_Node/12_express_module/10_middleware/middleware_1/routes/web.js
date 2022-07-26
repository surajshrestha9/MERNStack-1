import express from 'express';
const router = express.Router();

import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';

<<<<<<< HEAD
router.get('/', homeController); //127.0.0.1/->middleware(appliction level ->homecontoller
=======
router.get('/', homeController); //127.0.0.1/-> middleware-> homeController
>>>>>>> b5fd1dc7461037e1fa1697b5e1041fb3c743cbf9
router.get('/about', aboutController);

export default router;
import express from 'express';
const router = express.Router();
<<<<<<< HEAD
=======
import ejs from 'ejs';
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

import { homeController } from '../controllers/homeController.js';
import { aboutController } from '../controllers/aboutController.js';

router.get('/', homeController);
router.get('/about', aboutController);

export default router;
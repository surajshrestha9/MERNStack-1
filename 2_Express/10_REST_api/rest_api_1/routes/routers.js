import express from 'express';
const router = express.Router();
<<<<<<< HEAD
<<<<<<< HEAD
import { indexController,homeController, singleController, newController, putController,patchController, delController } from '../controllers/homeController.js';
=======
import {indexController, homeController, singleController, newController, putController,  patchController, delController } from '../controllers/homeController.js';
>>>>>>> 1df58e270c2dbab65d1a51047bf448cecb2c5b09
=======
import {indexController, homeController, singleController, newController, putController,  patchController, delController } from '../controllers/homeController.js';
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8

router.get('/', indexController);
router.get('/persons/', homeController);
router.get('/persons/:id', singleController);
router.post('/persons', newController);
router.put('/persons/:id', putController);
router.patch('/persons/:id', patchController);
router.delete('/persons/:id', delController);

export default router;
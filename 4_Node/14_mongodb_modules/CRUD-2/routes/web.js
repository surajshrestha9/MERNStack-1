import express from 'express';
const router = express.Router();

<<<<<<< HEAD
import {homeController,formController,saveController} from '../controllers/homeController.js';
=======
import {homeController, formController, saveController} from '../controllers/homeController.js';
>>>>>>> 0cac7901f3da025ddfde347bc2905bb3f33a13a3

router.get('/', homeController);
router.get('/new', formController);
router.get('/save', saveController);

export default router;

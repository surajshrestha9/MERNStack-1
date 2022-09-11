import express from 'express';
const router = express.Router();
import { homeController, createController, displayController, pageNotFound } from '../controllers/homeController.js';

router.get('/', homeController);
router.get('/create', createController);
router.get('/display', displayController);
router.get('/*', pageNotFound);

<<<<<<< HEAD
// set life-time of cookie  --hw
// delete cookie- manually
// find existence of cookie?
// simple login system with save userName and password feature
=======
>>>>>>> 01d45c7733214414338d0a31c679e9aef5f685a8
export default router;
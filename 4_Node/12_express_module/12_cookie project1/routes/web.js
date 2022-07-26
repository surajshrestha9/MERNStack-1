import express from 'express';
const router = express.Router();
import { homeController, createController, displayController, pageNotFound } from '../controllers/homeController.js';

router.get('/', homeController);
router.get('/create', createController);
router.get('/display', displayController);
router.get('/*', pageNotFound);

// set life-time of cookie  --hw
// delete cookie- manually
// find existence of cookie?
// simple login system with save userName and password feature
export default router;
import express from 'express'
const router = express.Router();
import { allStudent,deleteStudent } from '../controllers/studentController.js';

router.get('/all',allStudent)
router.get('/delete/:id',deleteStudent)

export default router
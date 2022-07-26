import express from 'express'
const router = express.Router();

import {allPerson,deletePerson} from '../controllers/personController.js'

router.get('/all',allPerson)
router.get('/delete/:id',deletePerson)

export default router
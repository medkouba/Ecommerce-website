import express from 'express';
import { getuser, getuserByID, createuser, updateuser,
deleteuser } from '../controllers/route.controllers.js';
const router = express.Router();
router.get('/', getuser);
router.post('/', createuser);
router.get('/:id', getuserByID);
router.put('/:id', updateuser);
router.delete('/:id', deleteuser);
export default router;
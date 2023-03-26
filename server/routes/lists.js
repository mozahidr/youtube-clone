import express from 'express';
import { createList, deleteList, getList, getListById } from '../controllers/list.js';
import { verify } from '../verifyToken.js';

const router = express.Router();

router.post('/', verify, createList);
router.delete("/:id", verify, deleteList);
router.get('/', verify, getList);
router.get('/find/:id', verify, getListById);

export default router;
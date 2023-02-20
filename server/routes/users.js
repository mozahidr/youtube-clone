import express from 'express';
import { updateUser, deleteUser, getByID, getAllUsers, getUserStats } from '../controllers/user.js';
import { verify } from '../verifyToken.js';

const router = express.Router();

router.put("/:id", verify, updateUser);
router.delete("/:id", verify, deleteUser);
router.get("/find/:id", getByID);
router.get("/", verify, getAllUsers);
router.get("/stats", getUserStats);

export default router;
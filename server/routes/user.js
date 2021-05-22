import express from 'express';

import { addUser, Login, getProfileUser, updateUser, updateImage } from '../controllers/user.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', addUser);
router.post('/login', Login)
router.get('/profile', authMiddleware, getProfileUser);
router.post('/update',authMiddleware, updateUser);
router.post('/updateavatar', authMiddleware, updateImage);

export default router;

import express from 'express';

import { addUser, Login, getProfileUser, updateUser, updateImage } from '../controllers/user.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', addUser);
router.post('/login', Login)
router.get('/:id', authMiddleware, getProfileUser);
router.post('/update/:id', updateUser);
router.post('/updateavatar/:id', updateImage)

export default router;

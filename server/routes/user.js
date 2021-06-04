import express from 'express';

import { addUser, Login, Logout, getProfileUser, updateUser, loginFacebook } from '../controllers/user.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', addUser);
router.post('/login', Login);
router.get('/logout', authMiddleware, Logout)
router.get('/profile', authMiddleware, getProfileUser);
router.post('/update',authMiddleware, updateUser);
router.post('/login-facebook', loginFacebook);

export default router;

import express from 'express';

import { addUser, Login, Logout, getProfileUser, updateUser, loginFacebook, forgotPassWord, resetPassWord, googleLogin } from '../controllers/user.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup', addUser);
router.post('/login', Login);
router.get('/logout', authMiddleware, Logout)
router.get('/profile', authMiddleware, getProfileUser);
router.post('/update',authMiddleware, updateUser);
router.post('/login-facebook', loginFacebook);
router.post('/forgot-password', forgotPassWord);
router.post('/reset-password/',authMiddleware, resetPassWord);
router.post('/login-google', googleLogin);

export default router;

import express from 'express';

import {addCart, getCartItem} from '../controllers/cart.js'
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();
router.post('/', authMiddleware, addCart);

router.get('/', getCartItem)

export default router;
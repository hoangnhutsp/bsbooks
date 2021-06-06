import express from 'express';

import {
    addToCart, 
    getCartItem, 
    updateCart
} from '../controllers/cart.js'
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/update', authMiddleware, updateCart);
router.post('/', authMiddleware, addToCart);
router.get('/', authMiddleware, getCartItem)

export default router;
import express from 'express';

import {addToCart, getCartItem} from '../controllers/cart.js'
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();
router.post('/', addToCart);

router.get('/', getCartItem)

export default router;
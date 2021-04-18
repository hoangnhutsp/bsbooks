import express from 'express';

import {addToCart, getCartItem} from '../controllers/cart.js'

const router = express.Router();
router.post('/', addToCart);

router.get('/', getCartItem)

export default router;
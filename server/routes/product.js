import express from 'express';


import {getProduct, createProduct, getProductByID} from '../controllers/product.js';
const router = express.Router();

router.get('/', getProduct);

router.get('/:id', getProductByID);
export default router;

import express from 'express';


import {getProduct, createProduct, getProductByID, updateProduct, searchProduct} from '../controllers/product.js';
const router = express.Router();

router.get('/', getProduct);
router.get('/:id', getProductByID);
router.post('/', createProduct)
router.put('/:id', updateProduct);
router.get('/search', searchProduct);
export default router;




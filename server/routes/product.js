import express from 'express';


import {
    getProduct, 
    createProduct, 
    getProductByID, 
    updateProduct, 
    searchProduct, 
    suggestionProduct
} from '../controllers/product.js';

const router = express.Router();

router.get('/search', searchProduct);
router.get('/search/suggestion', suggestionProduct)
router.get('/', getProduct);
router.get('/:id', getProductByID);
router.post('/', createProduct)
router.put('/:id', updateProduct);

export default router;




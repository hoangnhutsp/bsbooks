import express from 'express';
import {
    getProduct, 
    createProduct, 
    getProductByID, 
    updateProduct, 
    suggestionProduct,
    getProductByCategoryLimit,
    deleteProductByID,
} from '../controllers/product.js';

import { updateRecentlyViewed } from '../controllers/recently_viewed.js';

const router = express.Router();

// user
router.get('/search/suggestion', suggestionProduct)
router.get('/', getProduct);
router.get('/category', getProductByCategoryLimit)
router.get('/:id', updateRecentlyViewed, getProductByID);

// admin
router.post('/update', updateProduct);
router.post('/', createProduct)
router.delete('/:_id', deleteProductByID)


export default router;




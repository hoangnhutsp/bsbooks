import express from 'express';


import {
    getProduct, 
    createProduct, 
    getProductByID, 
    updateProduct, 
    searchProduct, 
    suggestionProduct,
    getProductByCategoryLimit
} from '../controllers/product.js';

import {
    updateRecentlyViewed
} from '../controllers/recently_viewed.js';

const router = express.Router();

router.get('/search', searchProduct);
router.get('/search/suggestion', suggestionProduct)
router.get('/', getProduct);
router.get('/category', getProductByCategoryLimit)

router.get('/:id', updateRecentlyViewed, getProductByID);



router.post('/update', updateProduct);
router.post('/', createProduct)



export default router;




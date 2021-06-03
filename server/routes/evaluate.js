import express from 'express';
import { addEvaluate, getEvaluateToProduct, updateEvaluateToStar, updateEvaluateToComment } from '../controllers/evaluate.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();
router.post('/', authMiddleware, addEvaluate);
router.get('/:idProduct', getEvaluateToProduct);
router.post('/update-star/:idProduct', authMiddleware, updateEvaluateToStar);
router.post('/update-comment/:idProduct', authMiddleware, updateEvaluateToComment);

export default router;
import express from 'express';

import {
    createInvoice,
    updateInvoice,
    getInvoice,
    getInvoiceByID,
    getAllInvoice,
    cancelInvoice
} from '../controllers/invoice.js'

import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create',authMiddleware, createInvoice);
router.post('/update/:id',authMiddleware, updateInvoice);
router.post('/cancel/:id', authMiddleware, cancelInvoice)
router.get('/getall', getAllInvoice)
router.get('/:id', authMiddleware, getInvoiceByID)
router.get('/',authMiddleware, getInvoice);

export default router;
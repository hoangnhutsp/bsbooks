import express from 'express'
import { addAddress, getAddressById, getAddressByIdUser, updateAddress, setAddressDefaul, deleteAddress } from '../controllers/address.js'

import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router()
router.post('/', authMiddleware, addAddress);                       //oke
router.get('/user', authMiddleware, getAddressByIdUser);            //oke
router.post('/update/:id', authMiddleware, updateAddress);
router.post('/default/:id', authMiddleware, setAddressDefaul)
router.delete('/delete/:id', authMiddleware, deleteAddress)
router.get('/:id', authMiddleware, getAddressById);

export default router;
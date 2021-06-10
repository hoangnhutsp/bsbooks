import express from 'express'

import { getAllUser, getProfileUserById} from '../controllers/admin.js'

const router = express.Router();
router.get('/user', getAllUser);
router.get('/user/:id', getProfileUserById)

export default router;
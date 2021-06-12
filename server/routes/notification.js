import express from 'express'

import { addNotification,
         getNotificationByIdUser,
         updateStatus,
} from '../controllers/notification.js'

import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router();

router.post('/', authMiddleware, addNotification);
router.get('/', authMiddleware, getNotificationByIdUser);
router.post('/status', authMiddleware, updateStatus);

export default router;
import express from 'express'

import { createNotification, deleteNotification, getNotification, getNotifications, updateNotification } from '../../controllers/NotificationController/notificationAdminController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import Notification from '../../models/Notification.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(Notification), getNotifications)
router.route('/:id').get(getNotification)
router.route('/').post(createNotification)
router.route('/:id').put(updateNotification)
router.route('/:id').delete(deleteNotification)

export default router

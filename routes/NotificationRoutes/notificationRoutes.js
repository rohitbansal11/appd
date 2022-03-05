import express from 'express'

import { getNotification } from '../../controllers/NotificationController/notificationController.js'

const router = express.Router()

// middleware //
import { protect } from '../../middlewares/auth.js'

router.use(protect)
router.route('/').get(getNotification)
//router.route('/check/').post(updateNotification)

export default router

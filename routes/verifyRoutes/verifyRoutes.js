import express from 'express'

import {
 VerifyUser
} from '../../controllers/Verify/verifyController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'

//router.use(protect)
router.route('/user/:id').get(VerifyUser)


export default router

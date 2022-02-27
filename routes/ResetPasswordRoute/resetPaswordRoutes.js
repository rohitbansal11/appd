import express from 'express'
import {
 resetPassword,
 resetPasswordHtml
} from '../../controllers/resetPassword/ResetPasswordController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'

//router.use(protect)
router.route('/user/:id').get(resetPasswordHtml)
router.route('/user/:id').post(resetPassword)


export default router

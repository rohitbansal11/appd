import express from 'express'
import {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
  logout,
} from '../controllers/authController.js'

// middleware //
import { protect } from '../middlewares/auth.js'

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/me').get(protect, getMe)
router.route('/forgot-password').post(forgotPassword)
router.route('/update-details').put(protect, updateDetails)
router.route('/update-password').put(protect, updatePassword)
router.route('/reset-password/:resetToken').put(resetPassword)

router.route('/logout').get(logout)

export default router

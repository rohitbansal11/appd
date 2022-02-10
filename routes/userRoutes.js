import express from 'express'

import {
  getUsers,
  addUser,
  updateUser,
  removeUser,
} from '../controllers/userController.js'

const router = express.Router({ mergeParams: true })

// middleware //
import { protect, authorize } from '../middlewares/auth.js'
import advancedResults from '../middlewares/advancedResults.js'
import User from '../models/User.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(User), getUsers)
router.route('/').post(addUser)
router.route('/:id').put(updateUser)
router.route('/:id').delete(removeUser)

export default router

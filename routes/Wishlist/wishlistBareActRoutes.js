import express from 'express'
import {
  getWishlistBareAct,
  addBareActToWishlist,
} from '../../controllers/WishlistBareAct/wishlisthBareActController.js'

const router = express.Router()

// middleware //
import { protect } from '../../middlewares/auth.js'

router.use(protect)
router.route('/').get(getWishlistBareAct)
router.route('/:bareActId').post(addBareActToWishlist)

export default router

import express from 'express'
import {
  getStickyLandMark,
  updateStickyLandMark,
} from '../../controllers/Sticky/StickyLandmarkController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'

router.use(protect)
router.route('/').get(getStickyLandMark)
router.route('/:legalLandmarkId').put(updateStickyLandMark)

export default router

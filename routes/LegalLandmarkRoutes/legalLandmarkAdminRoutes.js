import express from 'express'

import {
  getLegalLandmarks,
  getLegalLandmark,
  createLegalLandmark,
  updateLegalLandmark,
  deleteLegalLandmark,
} from '../../controllers/LegalLandmarkController/legalLandmarkAdminController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import LegalLandmark from '../../models/LegalLandmark.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(LegalLandmark), getLegalLandmarks)
router.route('/:id').get(getLegalLandmark)
router.route('/').post(createLegalLandmark)
router.route('/:id').put(updateLegalLandmark)
router.route('/:id').delete(deleteLegalLandmark)

export default router

import express from 'express'

import {
  getLegalLandmarks,
  getLegalLandmark,
} from '../../controllers/LegalLandmarkController/legalLandmarkController.js'

const router = express.Router()

// middleware //
import advancedResults from '../../middlewares/advancedResults.js'
import LegalLandmark from '../../models/LegalLandmark.js'

router.route('/').get(advancedResults(LegalLandmark), getLegalLandmarks)
router.route('/:id').get(getLegalLandmark)

export default router

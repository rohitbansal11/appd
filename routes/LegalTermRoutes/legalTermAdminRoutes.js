import express from 'express'

import {
  getLegalTerms,
  getLegalTerm,
  createLegalTerm,
  updateLegalTerm,
  deleteLegalTerm,
} from '../../controllers/LegalTermController/LegalTermAdminController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import LegalTerm from '../../models/LegalTerm.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(LegalTerm), getLegalTerms)
router.route('/:id').get(getLegalTerm)
router.route('/').post(createLegalTerm)
router.route('/:id').put(updateLegalTerm)
router.route('/:id').delete(deleteLegalTerm)

export default router

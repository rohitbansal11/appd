import express from 'express'

import {
  getLegalTerms,
  getLegalTerm,
} from '../../controllers/LegalTermController/LegalTermController.js'

const router = express.Router()

// middleware //
import advancedResults from '../../middlewares/advancedResults.js'
import LegalTerm from '../../models/LegalTerm.js'

router.route('/').get(advancedResults(LegalTerm), getLegalTerms)
router.route('/:id').get(getLegalTerm)

export default router

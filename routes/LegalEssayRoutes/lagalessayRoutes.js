import express from 'express'

import { getLegalessaies, getLegalessay } from '../../controllers/LegalEssayController/leagalessayController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import Legalessay from '../../models/Legalessay.js'

router.use(protect)
router.route('/').get(advancedResults(Legalessay), getLegalessaies)
router.route('/:id').get(getLegalessay)

export default router

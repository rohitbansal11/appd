import express from 'express'

import { createLegalessay, deleteLegalessay, getLegalessaies, getLegalessay, updateLegalessay } from '../../controllers/LegalEssayController/legalessayAdminController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import Legalessay from '../../models/Legalessay.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(Legalessay), getLegalessaies)
router.route('/:id').get(getLegalessay)
router.route('/').post(createLegalessay)
router.route('/:id').put(updateLegalessay)
router.route('/:id').delete(deleteLegalessay)

export default router

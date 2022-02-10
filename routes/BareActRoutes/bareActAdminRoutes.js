import express from 'express'

import {
  getBareActs,
  getBareAct,
  createBareAct,
  updateBareAct,
  deleteBareAct,
} from '../../controllers/BareActController/bareActAdminController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import BareAct from '../../models/BareAct.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(BareAct), getBareActs)
router.route('/:id').get(getBareAct)
router.route('/').post(createBareAct)
router.route('/:id').put(updateBareAct)
router.route('/:id').delete(deleteBareAct)

export default router

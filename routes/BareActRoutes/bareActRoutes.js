import express from 'express'

import {
  getBareActs,
  getBareAct,
} from '../../controllers/BareActController/bareActController.js'

const router = express.Router()

// middleware //
import advancedResults from '../../middlewares/advancedResults.js'
import BareAct from '../../models/BareAct.js'

router.route('/').get(advancedResults(BareAct), getBareActs)
router.route('/:id').get(getBareAct)

export default router

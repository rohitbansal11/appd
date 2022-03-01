import express from 'express'

import { getSyllabus, getSyllabuses } from '../../controllers/SyllabusController/syllabusController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import Syllabus from '../../models/Syllabus.js'

router.route('/').get(advancedResults(Syllabus), getSyllabuses)
router.route('/:id').get(getSyllabus)

export default router

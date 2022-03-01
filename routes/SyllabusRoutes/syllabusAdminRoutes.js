import express from 'express'

import { createSyllabus, deleteSyllabus, getSyllabus, getSyllabuses, updateSyllabus } from '../../controllers/SyllabusController/syllabusAdminController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import Syllabus from '../../models/Syllabus.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(Syllabus), getSyllabuses)
router.route('/:id').get(getSyllabus)
router.route('/').post(createSyllabus)
router.route('/:id').put(updateSyllabus)
router.route('/:id').delete(deleteSyllabus)

export default router

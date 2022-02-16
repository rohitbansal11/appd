import express from 'express'
import { createDictionary, deleteDictionary, getDictionary, updateDictionary } from '../../controllers/Dictionary/DictionaryAdminController.js'


const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'
import advancedResults from '../../middlewares/advancedResults.js'
import Dictionary from '../../models/Dictionary.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(Dictionary), getDictionary)
router.route('/').post(createDictionary)
router.route('/:id').put(updateDictionary)
router.route('/:id').delete(deleteDictionary)

export default router

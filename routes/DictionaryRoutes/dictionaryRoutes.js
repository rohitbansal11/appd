import express from 'express'
import { getDictionary } from '../../controllers/Dictionary/DictionaryController.js'

const router = express.Router()

// middleware //
import advancedResults from '../../middlewares/advancedResults.js'
import { protect } from '../../middlewares/auth.js'
import DictionaryModal from '../../models/Dictionary.js'
router.use(protect)
router.route('/').get(advancedResults(DictionaryModal), getDictionary)


export default router

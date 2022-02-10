import express from 'express'

import { getArticles, getArticle } from '../controllers/articleController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../middlewares/auth.js'
import advancedResults from '../middlewares/advancedResults.js'
import Article from '../models/Article.js'

router.route('/').get(advancedResults(Article), getArticles)
router.route('/:id').get(getArticle)

export default router

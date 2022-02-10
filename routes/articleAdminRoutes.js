import express from 'express'

import {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/articleAdminController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../middlewares/auth.js'
import advancedResults from '../middlewares/advancedResults.js'
import Article from '../models/Article.js'

router.use(protect)
router.use(authorize('admin'))
router.route('/').get(advancedResults(Article), getArticles)
router.route('/:id').get(getArticle)
router.route('/').post(createArticle)
router.route('/:id').put(updateArticle)
router.route('/:id').delete(deleteArticle)

export default router

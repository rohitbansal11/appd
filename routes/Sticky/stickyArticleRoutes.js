import express from 'express'
import {
  getStickyAricle,
  updateStickyArticle,
} from '../../controllers/Sticky/stickyArticleController.js'

const router = express.Router()

// middleware //
import { protect, authorize } from '../../middlewares/auth.js'

router.use(protect)
router.route('/').get(getStickyAricle)
router.route('/:articleId').put(updateStickyArticle)

export default router

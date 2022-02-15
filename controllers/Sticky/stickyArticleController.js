import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'
import Sticky from '../../models/Sticky.js'
import Article from '../../models/Article.js'

// @desc        Get  Sticky Article
// @route       GET   /api/v1/sticky/:id
// @access      Public
export const getStickyAricle = asyncHandler(async (req, res, next) => {
  let userId = req.user.id
  let article = await Sticky.findOne({ userId: userId })
  if (!article) {
    throw new ErrorResponse('User Does Not Have A Sticky Article')
  }
  let articleData = await Article.findById(article.articleId)

  res.status(200).json({
    success: true,
    data: articleData || [],
  })
})

// @desc        Update Sticky Article
// @route       put   /api/v1/sticky/:id
// @access      Public
export const updateStickyArticle = asyncHandler(async (req, res, next) => {
  const article = await Sticky.findOne({ userId: req.user.id })

  if (article) {
    let newArticle = await Sticky.findByIdAndUpdate(article._id, {
      userId: req.user.id,
      articleId: req.params.articleId,
    })
    res.status(201).json({
      success: true,
      data: newArticle,
    })
  } else {
    let newArticle = await Sticky.create({
      userId: req.user.id,
      articleId: req.params.articleId,
    })
    res.status(201).json({
      success: true,
      data: newArticle,
    })
  }
})

// @desc        Delete Sticky
// @route       delete   /api/v1/article/:id
// @access      Public
export const deleteStickyArticle = asyncHandler(async (req, res) => {})

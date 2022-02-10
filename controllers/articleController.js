import Article from '../models/User.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../utils/errorResponse.js'

// @desc        Get all article
// @route       GET   /api/v1/article
// @access      Public
export const getArticles = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single article
// @route       GET   /api/v1/article/:id
// @access      Public
export const getArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findById(req.params.id)
  if (!article) {
    return next(new ErrorResponse(`Article Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: article,
  })
})

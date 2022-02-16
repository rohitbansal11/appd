import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'


// @desc        Get all dictionay
// @route       GET   /api/v1/dictionary
// @access      Public
export const getDictionary = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})



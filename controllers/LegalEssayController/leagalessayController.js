import Legalessay from '../../models/Legalessay.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all legalessay
// @route       GET   /api/v1/legal-essay
// @access      Public
export const getLegalessaies = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single legalessay
// @route       GET   /api/v1/legal-essay/:id
// @access      Public
export const getLegalessay = asyncHandler(async (req, res, next) => {
  const legalessay = await Legalessay.findById(req.params.id)
  if (!legalessay) {
    return next(new ErrorResponse(`Legalessay Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalessay,
  })
})

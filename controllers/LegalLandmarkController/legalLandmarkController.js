import asyncHandler from 'express-async-handler'

import LegalLandmark from '../../models/LegalLandmark.js'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all legal landmark
// @route       GET   /api/v1/legal-landmark
// @access      Public
export const getLegalLandmarks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single legal landmark
// @route       GET   /api/v1/legal-landmark/:id
// @access      Public
export const getLegalLandmark = asyncHandler(async (req, res, next) => {
  const legalLandmark = await LegalLandmark.findById(req.params.id)
  if (!legalLandmark) {
    return next(new ErrorResponse(`Legal Landmark Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalLandmark,
  })
})
